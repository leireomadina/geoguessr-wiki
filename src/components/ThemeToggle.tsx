import React from "react";
import useTheme from "@/hooks/useTheme";
import { SunIcon, MoonIcon } from "@/components/icons";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <SunIcon width="20" height="20" />
      ) : (
        <MoonIcon width="20" height="20" />
      )}
    </button>
  );
};

export default ThemeToggle;
