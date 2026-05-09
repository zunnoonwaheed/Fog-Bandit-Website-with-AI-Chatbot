import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ChatWidgetContextValue = {
  isChatOpen: boolean;
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatWidgetContext = createContext<ChatWidgetContextValue | null>(null);

export function ChatWidgetProvider({ children }: { children: ReactNode }) {
  const [isChatOpen, setChatOpen] = useState(false);
  const value = useMemo(() => ({ isChatOpen, setChatOpen }), [isChatOpen]);
  return <ChatWidgetContext.Provider value={value}>{children}</ChatWidgetContext.Provider>;
}

export function useChatWidget() {
  const ctx = useContext(ChatWidgetContext);
  if (!ctx) {
    throw new Error("useChatWidget must be used within ChatWidgetProvider");
  }
  return ctx;
}

/** Navbar and other chrome that may sit outside the provider in tests — treat missing context as closed. */
export function useChatWidgetOptional() {
  return useContext(ChatWidgetContext);
}
