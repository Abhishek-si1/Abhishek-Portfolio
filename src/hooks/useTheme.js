import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialDarkMode = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved === "dark";
  } catch {
    // localStorage can be unavailable (private mode, blocked storage) - fall through
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/** Light/dark theme state, applied to <html data-theme> and <body> classes. */
export default function useTheme() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark-theme", darkMode);
    document.body.classList.toggle("light-theme", !darkMode);

    // brief transition while the theme swaps
    root.style.transition = "all 0.3s ease";
    const timer = setTimeout(() => {
      root.style.transition = "";
    }, 300);
    return () => clearTimeout(timer);
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode((current) => {
      const next = !current;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  return { darkMode, toggleTheme };
}
