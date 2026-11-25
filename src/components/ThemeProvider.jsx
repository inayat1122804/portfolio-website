import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../hooks/themeContext";

const STORAGE_KEY = "inayat-portfolio-theme";

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [hasManualChoice, setHasManualChoice] = useState(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    return savedTheme === "light" || savedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.head
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#101116" : "#f7f8fc");
    if (hasManualChoice) {
      window.localStorage.setItem(STORAGE_KEY, theme);
      return undefined;
    }

    const systemTheme = window.matchMedia("(prefers-color-scheme: light)");
    const followSystemTheme = (event) => {
      setTheme(event.matches ? "light" : "dark");
    };
    systemTheme.addEventListener("change", followSystemTheme);
    return () => systemTheme.removeEventListener("change", followSystemTheme);
  }, [hasManualChoice, theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setHasManualChoice(true);
        setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
      },
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
