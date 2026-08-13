import { createContext, useContext, useState, ReactNode } from "react";

interface IJFPopupContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const IJFPopupContext = createContext<IJFPopupContextValue | undefined>(undefined);

export const IJFPopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IJFPopupContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IJFPopupContext.Provider>
  );
};

export const useIJFPopup = () => {
  const context = useContext(IJFPopupContext);
  if (!context) {
    throw new Error("useIJFPopup must be used within an IJFPopupProvider");
  }
  return context;
};
