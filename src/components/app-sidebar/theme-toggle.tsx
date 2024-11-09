"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 rounded-full"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
