type MetaParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (method: "track" | "trackCustom", eventName: string, params?: MetaParams) => void;
  }
}

export const trackMetaEvent = (eventName: string, params: MetaParams = {}) => {
  if (typeof window.fbq !== "function") return;
  window.fbq("track", eventName, params);
};
