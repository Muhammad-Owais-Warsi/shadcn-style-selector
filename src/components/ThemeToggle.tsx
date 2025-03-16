import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("color-theme") === "dark";
    }
    return false;
  });

  const { toast } = useToast();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--background", "#121212");
      document.documentElement.style.setProperty("--foreground", "#ffffff");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#000000");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("color-theme", newTheme ? "dark" : "light");

      toast({
        title: newTheme ? "Dark mode activated" : "Light mode activated",
        description: `The application is now in ${newTheme ? "dark" : "light"} mode`,
        duration: 2000,
      });

      return newTheme;
    });
  };

  return (
    <Toggle
      aria-label="Toggle dark mode"
      pressed={isDarkMode}
      onPressedChange={toggleTheme}
      className="rounded-full p-2 hover:bg-secondary"
    >
      {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Toggle>
  );
}
