import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMetaEvent } from "@/lib/metaPixel";

const pageNames: Record<string, string> = {
  "/": "Homepage",
  "/contact": "Contact us",
};

const MetaPageTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageName = pageNames[pathname];
    if (!pageName) return;

    trackMetaEvent("PageView", { page_name: pageName, page_path: pathname });
  }, [pathname]);

  return null;
};

export default MetaPageTracker;
