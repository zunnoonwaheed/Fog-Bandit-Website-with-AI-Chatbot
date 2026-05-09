import { useState, useRef, useEffect } from "react";
import { Send, RotateCcw, MessageCircle, Plus } from "lucide-react";

const businessTypes = [
  { label: "Retail Store", icon: "🏬" },
  { label: "Warehouse / Logistics", icon: "🏭" },
  { label: "Hospitality / Hotel", icon: "🏨" },
  { label: "Healthcare / Medical", icon: "🏥" },
  { label: "Office / Finance", icon: "💼" },
  { label: "Other", icon: "🔧" },
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const IndustriesChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi there! I'm the Fog Bandit Quote Assistant. I'll help you get a customised security solution quote in just a few minutes."
    },
    {
      role: "assistant",
      content: "To get started — what type of business are you looking to protect?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply || data.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please make sure the chatbot server is running (npm run server)."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleBusinessTypeClick = (label: string) => {
    sendMessage(label);
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content: "👋 Hi there! I'm the Fog Bandit Quote Assistant. I'll help you get a customised security solution quote in just a few minutes."
      },
      {
        role: "assistant",
        content: "To get started — what type of business are you looking to protect?"
      }
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3">
            Fog Bandit AI Security Deployment Assistant
          </h1>
          <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed">
            The ultimate active defense system. When seconds matter, Sentinel deploys a high-density security fog that eliminates visibility instantly—neutralizing threats without harm.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto bg-background border border-border rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[hsl(225,65%,22%)] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-white" fill="white" strokeWidth={0} />
              </div>
              <div>
                <h3 className="text-[13px] md:text-[14px] font-semibold text-foreground leading-tight">
                  Fog Bandit Quote Assistant
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] md:text-[11px] text-green-600 font-medium">
                    Online — typically responds instantly
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-[11px] md:text-[12px] text-muted-foreground hover:bg-muted transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              Start Over
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 md:p-5 min-h-[320px] md:min-h-[420px] max-h-[500px] overflow-y-auto space-y-3 md:space-y-4 bg-background">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-2 md:gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                {message.role === "assistant" && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[hsl(225,65%,22%)] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" fill="white" strokeWidth={0} />
                  </div>
                )}
                <div className={`rounded-lg px-3 py-2 md:px-4 md:py-2.5 max-w-[85%] md:max-w-[75%] ${
                  message.role === "assistant"
                    ? "bg-[hsl(210,40%,96%)] rounded-tl-sm"
                    : "bg-primary text-primary-foreground rounded-tr-sm"
                }`}>
                  <p className="text-[12px] md:text-[13px] leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[hsl(225,65%,22%)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" fill="white" strokeWidth={0} />
                </div>
                <div className="bg-[hsl(210,40%,96%)] rounded-lg rounded-tl-sm px-3 py-2 md:px-4 md:py-2.5">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}

            {/* Business type chips - only show if messages length is 2 (initial state) */}
            {messages.length === 2 && (
              <div className="flex flex-wrap gap-1.5 md:gap-2 pl-9 md:pl-11 pt-1">
                {businessTypes.map((type) => (
                  <button
                    key={type.label}
                    onClick={() => handleBusinessTypeClick(type.label)}
                    disabled={isLoading}
                    className="flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-2 bg-background border border-border rounded-full text-[11px] md:text-[12px] text-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{type.icon}</span>
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 md:p-4 bg-background">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 md:gap-3">
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
                disabled={isLoading}
                placeholder="Type your message or choose an option above..."
                className="flex-1 bg-[hsl(210,40%,98%)] border border-border rounded-lg px-3 py-2 md:px-4 md:py-2.5 text-[12px] md:text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </form>
            <div className="flex items-center justify-center gap-2 mt-2.5 md:mt-3 text-[10px] md:text-[11px] text-muted-foreground">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[9px] md:text-[10px] font-mono">Enter</kbd>
              <span>to send</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesChatbot;
