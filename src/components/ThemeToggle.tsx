
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  // Check system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      toast({
        title: "Light mode activated",
        description: "The application is now in light mode",
        duration: 2000,
      });
    } else {
      document.documentElement.classList.add("dark");
      toast({
        title: "Dark mode activated",
        description: "The application is now in dark mode",
        duration: 2000,
      });
    }
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
