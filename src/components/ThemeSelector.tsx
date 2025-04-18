
import { useEffect, useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ThemeDefinition, THEMES } from "@/constants/themes";

type ThemeSelectorProps = {
  onChange: (theme: ThemeDefinition) => void;
}

export default function ThemeSelector({ onChange }: ThemeSelectorProps) {
  // Set zinc as default theme but check localStorage first
  const [selectedTheme, setSelectedTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    return savedTheme || "zinc";
  });

  useEffect(() => {
    const theme = THEMES.find(t => t.name === selectedTheme);
    if (theme) {
      onChange(theme);
      localStorage.setItem("selected-theme", selectedTheme);
    }
  }, [selectedTheme, onChange]);

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Theme</h3>
      <Select
        value={selectedTheme}
        onValueChange={setSelectedTheme}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          {THEMES.map((theme) => (
            <SelectItem 
              key={theme.name} 
              value={theme.name}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2">
                <div 
                  className="h-4 w-4 rounded-full" 
                  style={{ backgroundColor: theme.activeColor }}
                />
                {theme.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
