import { useEffect, useState } from "react";
import { Bot, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useChatWidget } from "@/context/ChatWidgetContext";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const Account = () => {
  const { user } = useAuth();
  const { setChatOpen } = useChatWidget();
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const displayName = String(user?.user_metadata?.full_name || "").trim();
  const conversation = chatHistory.some((message) => message.role === "user") ? chatHistory : [];

  useEffect(() => {
    const loadChat = () => {
      if (!user) return setChatHistory([]);
      const saved = localStorage.getItem(`fogBanditChat:${user.id}`);
      if (!saved) return setChatHistory([]);
      try {
        const parsed = JSON.parse(saved) as ChatMessage[];
        setChatHistory(parsed.filter((message) =>
          Boolean(message && (message.role === "assistant" || message.role === "user") && typeof message.content === "string"),
        ));
      } catch {
        setChatHistory([]);
      }
    };
    loadChat();
    window.addEventListener("fog-bandit-chat-updated", loadChat);
    return () => window.removeEventListener("fog-bandit-chat-updated", loadChat);
  }, [user]);

  return (
    <div>
      <header>
        <h1 className="font-inter text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl">
          {displayName ? `Welcome, ${displayName}` : "Welcome to your account"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Continue your conversation with the Fog Bandit Quote Assistant.
        </p>
      </header>

      <section className="premium-card mt-8 max-w-3xl rounded-2xl p-5 md:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#021373]/[0.07] text-[#021373]">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Chatbot conversation</h2>
            <p className="mt-1 text-sm text-muted-foreground">Your latest Quote Assistant conversation.</p>
          </div>
        </div>

        <div className="mt-6">
          {conversation.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-7 text-center">
              <MessageSquareText className="mx-auto h-7 w-7 text-muted-foreground/60" />
              <p className="mt-3 text-sm font-semibold">No conversation saved yet</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Messages are saved automatically while you are signed in.</p>
            </div>
          ) : (
            <div className="max-h-80 space-y-3 overflow-y-auto pr-1">
              {conversation.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={message.role === "user" ? "ml-8 rounded-xl bg-[#021373] px-4 py-3 text-white" : "mr-8 rounded-xl bg-muted px-4 py-3 text-foreground"}
                >
                  <p className="line-clamp-4 whitespace-pre-wrap text-xs leading-5">{message.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <Button onClick={() => setChatOpen(true)} className="mt-5 h-11 w-full rounded-xl bg-[#021373] text-white hover:bg-[#021373]/90">
          {conversation.length > 0 ? "Continue conversation" : "Start a conversation"}
        </Button>
      </section>
    </div>
  );
};

export default Account;
