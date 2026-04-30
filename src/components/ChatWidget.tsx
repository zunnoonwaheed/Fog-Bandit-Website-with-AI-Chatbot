import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Send, RotateCcw, Plus, X, ArrowRight, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import chatFabBlue from "@/assets/chat-fab-blue.svg";
import chatFabRed from "@/assets/chat-fab-red.svg";
import chatAvatar from "@/assets/chat-avatar.svg";
import logoImg from "@/assets/fog-bandit-logo.svg";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const businessTypes = [
  { label: "Retail Store", icon: "🏬" },
  { label: "Warehouse / Logistics", icon: "🏭" },
  { label: "Hospitality / Hotel", icon: "🏨" },
  { label: "Healthcare / Medical", icon: "🏥" },
  { label: "Office / Finance", icon: "💼" },
  { label: "Other", icon: "🔧" },
];

type Msg = { role: "assistant" | "user"; content: string };

const INITIAL_MESSAGES: Msg[] = [
  {
    role: "assistant",
    content:
      "👋 Hi there! I'm the Fog Bandit Quote Assistant. I'll help you get a customised security solution quote in just a few minutes.",
  },
  {
    role: "assistant",
    content: "To get started — what type of business are you looking to protect?",
  },
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>(INITIAL_MESSAGES);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-claude", {
        body: { messages: next },
      });
      if (error) throw error;
      const reply = (data as { reply?: string })?.reply ?? "Sorry, no response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e: any) {
      console.error(e);
      toast({
        title: "Chat error",
        description: e?.message ?? "Failed to reach the assistant.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] transition-transform hover:scale-105 active:scale-95"
      >
        <img
          src={open ? chatFabRed : chatFabBlue}
          alt=""
          className="md:hidden w-[64px] h-[64px] drop-shadow-lg"
        />
        <img
          src={chatFabBlue}
          alt=""
          className="hidden md:block w-[72px] h-[72px] drop-shadow-lg"
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
          <div className="sticky top-0 z-10 bg-background">
            <div className="mx-3 md:mx-6 my-3 md:my-4 bg-background border border-border rounded-2xl shadow-sm">
              <div className="flex items-center justify-between h-[52px] md:h-[64px] px-4 md:px-6">
                <Link to="/" onClick={() => setOpen(false)}>
                  <img src={logoImg} alt="Fog Bandit" className="h-8 md:h-10 object-contain" />
                </Link>
                <div className="flex items-center gap-2">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-9 md:h-10 px-3 md:px-5 text-[12px] md:text-[14px] font-semibold"
                  >
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Get a quote
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                    </Link>
                  </Button>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close chat"
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="pt-6 md:pt-10 pb-14 md:pb-[80px]">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
                <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3">
                  Fog Bandit AI Security Deployment Assistant
                </h1>
                <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed">
                  The ultimate active defense system. When seconds matter, Sentinel deploys a high-density security fog that eliminates visibility instantly—neutralizing threats without harm.
                </p>
              </div>

              <div className="max-w-[1100px] mx-auto bg-background border border-border rounded-2xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <img src={chatAvatar} alt="" className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0" />
                    <div>
                      <h3 className="text-[13px] md:text-[14px] font-semibold text-foreground leading-tight">
                        Fog Bandit Quote Assistant
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] md:text-[11px] text-green-600 font-medium">
                          Online — typically replies within minutes
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={resetChat}
                    className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-[11px] md:text-[12px] text-muted-foreground hover:bg-muted transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Start Over
                  </button>
                </div>

                {/* Messages */}
                <div
                  ref={scrollRef}
                  className="p-4 md:p-5 min-h-[320px] md:min-h-[420px] max-h-[60vh] overflow-y-auto space-y-3 md:space-y-4 bg-background"
                >
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 md:gap-3 ${m.role === "user" ? "justify-end" : ""}`}
                    >
                      {m.role === "assistant" && (
                        <img src={chatAvatar} alt="" className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0" />
                      )}
                      <div
                        className={
                          m.role === "assistant"
                            ? "bg-[hsl(210,40%,96%)] rounded-lg rounded-tl-sm px-3 py-2 md:px-4 md:py-2.5 max-w-[85%] md:max-w-[75%]"
                            : "bg-primary text-primary-foreground rounded-lg rounded-tr-sm px-3 py-2 md:px-4 md:py-2.5 max-w-[85%] md:max-w-[75%]"
                        }
                      >
                        {m.role === "assistant" ? (
                          <div className="text-[12px] md:text-[13px] leading-relaxed prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 prose-headings:mt-3 prose-headings:mb-1.5 prose-headings:text-foreground prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-p:text-foreground prose-li:text-foreground first:prose-p:mt-0 last:prose-p:mb-0">
                            <ReactMarkdown>{m.content}</ReactMarkdown>
                          </div>
                        ) : (
                          <p className="text-[12px] md:text-[13px] leading-relaxed whitespace-pre-wrap">
                            {m.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Business chips — only show before user has spoken */}
                  {!messages.some((m) => m.role === "user") && (
                    <div className="flex flex-nowrap gap-1.5 md:gap-2 pl-9 md:pl-11 pt-1 overflow-x-auto md:overflow-visible -mr-4 md:mr-0 pr-4 md:pr-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {businessTypes.map((type) => (
                        <button
                          key={type.label}
                          onClick={() => sendMessage(`I'm looking to protect a ${type.label}.`)}
                          disabled={loading}
                          className="flex items-center gap-1.5 px-3 py-1.5 md:px-3 md:py-2 bg-background border border-border rounded-full text-[11px] md:text-[12px] text-foreground hover:bg-muted transition-colors whitespace-nowrap flex-shrink-0 disabled:opacity-50"
                        >
                          <span>{type.icon}</span>
                          <span>{type.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {loading && (
                    <div className="flex items-start gap-2 md:gap-3">
                      <img src={chatAvatar} alt="" className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0" />
                      <div className="bg-[hsl(210,40%,96%)] rounded-lg rounded-tl-sm px-3 py-2 md:px-4 md:py-2.5">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="border-t border-border p-3 md:p-4 bg-background">
                  <div className="flex items-center gap-2 md:gap-3">
                    <button
                      type="button"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors"
                    >
                      <Plus className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={loading}
                      placeholder="Type your message or choose an option above..."
                      className="flex-1 bg-[hsl(210,40%,98%)] border border-border rounded-lg px-3 py-2 md:px-4 md:py-2.5 text-[12px] md:text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                    />
                    <button
                      type="button"
                      onClick={() => sendMessage(input)}
                      disabled={loading || !input.trim()}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 md:h-5 md:w-5" />}
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2.5 md:mt-3 text-[10px] md:text-[11px] text-muted-foreground">
                    <span>Press</span>
                    <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[9px] md:text-[10px] font-mono">Enter</kbd>
                    <span>to send</span>
                    <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[9px] md:text-[10px] font-mono">Shift+Enter</kbd>
                    <span>for new line</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
