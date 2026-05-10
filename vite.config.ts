import { defineConfig, type Connect, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

function attachAnthropicChatMiddleware(middlewares: Connect.Server): void {
  middlewares.use("/api/chat", async (req, res) => {
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured" }));
      return;
    }

    try {
      const chunks: Buffer[] = [];
      for await (const chunk of req) chunks.push(Buffer.from(chunk));
      const rawBody = Buffer.concat(chunks).toString("utf8") || "{}";
      const body = JSON.parse(rawBody) as { messages?: Array<{ role: string; content: string }> };

      const messages = Array.isArray(body?.messages) ? body.messages : [];
      if (messages.length === 0) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "messages array is required" }));
        return;
      }

      const cleanMessages = messages
        .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          system: `You are the Fog Bandit Quote Assistant. Help customers get security quotes.

Keep responses SHORT and to-the-point - 1-2 sentences max. Ask ONE question at a time. Be friendly but concise.`,
          messages: cleanMessages,
        }),
      });

      const text = await response.text();
      if (!response.ok) {
        res.statusCode = response.status;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: `AI error (${response.status}): ${text.slice(0, 200)}` }));
        return;
      }

      const data = JSON.parse(text);
      const reply = Array.isArray(data?.content)
        ? data.content
            .filter((b: { type?: string }) => b?.type === "text")
            .map((b: { text?: string }) => b.text)
            .join("\n")
            .trim() || "Sorry, I couldn't generate a response."
        : "Sorry, I couldn't generate a response.";

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ reply }));
    } catch (e) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }));
    }
  });
}

function anthropicChatApi(): Plugin {
  return {
    name: "local-anthropic-chat-api",
    configureServer(server) {
      attachAnthropicChatMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      return () => attachAnthropicChatMiddleware(server.middlewares);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Always this URL: http://127.0.0.1:8080 — no port hopping. If busy: npm run kill-ports
    host: "127.0.0.1",
    port: 8080,
    strictPort: true,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
  plugins: [anthropicChatApi(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
