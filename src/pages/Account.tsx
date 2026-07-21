import { useEffect, useState } from "react";
import { Bookmark, Bot, MessageSquareText, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useChatWidget } from "@/context/ChatWidgetContext";
import { supabase } from "@/integrations/supabase/client";

type SavedContent = {
  href: string;
  title: string;
  page?: string;
  saved_at?: string;
};

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const Account = () => {
  const { user } = useAuth();
  const { setChatOpen } = useChatWidget();
  const displayName = String(user?.user_metadata?.full_name || "").trim();
  const savedContent: SavedContent[] = Array.isArray(user?.user_metadata?.saved_content)
    ? user.user_metadata.saved_content
    : [];
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const conversation = chatHistory.filter((message) => message.role === "user").length > 0 ? chatHistory : [];

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

  const removeSavedContent = async (href: string) => {
    if (!supabase) return;
    const next = savedContent.filter((item) => item.href !== href);
    const { error } = await supabase.auth.updateUser({ data: { saved_content: next } });
    if (error) return toast.error("Unable to remove that saved item.");
    toast.success("Removed from saved content.");
  };

  return (
    <div>
      <header>
        <h1 className="font-inter text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl">
          {displayName ? `Welcome, ${displayName}` : "Welcome to your account"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Return to content you saved and continue your conversation with the Fog Bandit Quote Assistant.
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="premium-card rounded-2xl p-5 md:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#021373]/[0.07] text-[#021373]">
              <Bookmark className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Saved content</h2>
              <p className="mt-1 text-sm text-muted-foreground">Pages and sections you want to revisit.</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {savedContent.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-7 text-center">
                <Bookmark className="mx-auto h-7 w-7 text-muted-foreground/60" />
                <p className="mt-3 text-sm font-semibold">Nothing saved yet</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Use the Save button in the website navigation to keep a page or section here.</p>
              </div>
            ) : (
              savedContent.map((item) => (
                <div key={item.href} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                  <Link to={item.href} className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground hover:text-primary">{item.title}</p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">{item.page || item.href}</p>
                  </Link>
                  <button
                    type="button"
                    onClick={() => void removeSavedContent(item.href)}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label={`Remove ${item.title} from saved content`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="premium-card rounded-2xl p-5 md:p-7">
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
    </div>
  );
};

export default Account;
