import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let timeoutId;
      let frameId;
      let attempts = 0;
      const scrollToTarget = () => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "auto"
              : "smooth",
          });
          return;
        }
        attempts += 1;
        if (attempts < 20) timeoutId = window.setTimeout(scrollToTarget, 25);
      };
      frameId = window.requestAnimationFrame(() => {
        scrollToTarget();
      });
      return () => {
        window.cancelAnimationFrame(frameId);
        window.clearTimeout(timeoutId);
      };
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [hash, pathname]);

  return null;
}
