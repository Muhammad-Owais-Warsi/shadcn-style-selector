
import { useState, useEffect } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  FONT_FAMILIES, 
  FONT_WEIGHTS,
  FontDefinition
} from "@/constants/fonts";

type FontStylesProps = {
  fontFamily: string;
  fontWeight: string;
}

type FontSelectorProps = {
  onChange: (styles: FontStylesProps) => void;
}

export default function FontSelector({ onChange }: FontSelectorProps) {
  const [styles, setStyles] = useState<FontStylesProps>({
    fontFamily: FONT_FAMILIES[0].value,
    fontWeight: FONT_WEIGHTS[0].value,
  });

  const updateStyle = (key: keyof FontStylesProps, value: string) => {
    setStyles(prev => ({
      ...prev,
      [key]: value
    }));
  };

  useEffect(() => {
    onChange(styles);
  }, [styles, onChange]);

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Font Family</h3>
        <Select
          value={styles.fontFamily}
          onValueChange={(value) => updateStyle('fontFamily', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font family" />
          </SelectTrigger>
          <SelectContent>
            {FONT_FAMILIES.map((font) => {
              const fontClass = font.className;
              return (
                <SelectItem 
                  key={font.value} 
                  value={font.value}
                  className={fontClass}
                >
                  {font.label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Font Weight</h3>
        <Select
          value={styles.fontWeight}
          onValueChange={(value) => updateStyle('fontWeight', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font weight" />
          </SelectTrigger>
          <SelectContent>
            {FONT_WEIGHTS.map((weight) => (
              <SelectItem key={weight.value} value={weight.value}>
                {weight.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
