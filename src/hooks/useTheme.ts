import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

// localStorage key under which the user's theme choice is saved
const STORAGE_KEY = "theme";

// Reads the saved choice; returns null when nothing valid is stored
function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

// Returns the OS/browser light or dark preference
function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useTheme() {
  // Initial theme: get saved choice, else fall back to the OS preference
  const [theme, setTheme] = useState<Theme>(
    () => getStoredTheme() ?? getSystemTheme(),
  );

  // Keep the html data-theme attribute in sync with the state
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Updates the theme in response to OS theme changes, but only until the user picks manually
  useEffect(() => {
    if (getStoredTheme() !== null) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(getSystemTheme());
    media.addEventListener("change", onChange);
    // Cleanup runs on re-run/unmount, removing the listener
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  // Toggles light/dark theme and persists the choice
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, newTheme);
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme };
}

export default useTheme;
