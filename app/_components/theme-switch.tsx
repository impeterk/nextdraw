"use client";

import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex rounded gap-px">
      <button
        className={`btn ${theme == "light" ? "btn-active" : ""}`}
        onClick={() => setTheme("light")}
      >
        light
      </button>
      <button
        className={`btn ${theme == "dark" ? "btn-active" : ""}`}
        onClick={() => setTheme("dark")}
      >
        dark
      </button>
      <button
        className={`btn ${theme == "system" ? "btn-active" : ""}`}
        onClick={() => setTheme("system")}
      >
        system
      </button>
    </div>
  );
}
