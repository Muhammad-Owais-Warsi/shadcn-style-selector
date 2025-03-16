
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  // On component mount, check localStorage first, then system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");
    
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        localStorage.setItem("color-theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      toast({
        title: "Light mode activated",
        description: "The application is now in light mode",
        duration: 2000,
      });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
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
