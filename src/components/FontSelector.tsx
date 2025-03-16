
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
  FONT_SIZES, 
  LINE_HEIGHTS,
  LETTER_SPACINGS,
  FontDefinition
} from "@/constants/fonts";

type FontStylesProps = {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

type FontSelectorProps = {
  onChange: (styles: FontStylesProps) => void;
}

export default function FontSelector({ onChange }: FontSelectorProps) {
  const [styles, setStyles] = useState<FontStylesProps>({
    fontFamily: FONT_FAMILIES[0].value,
    fontWeight: FONT_WEIGHTS[0].value,
    fontSize: FONT_SIZES[2].value,
    lineHeight: LINE_HEIGHTS[3].value,
    letterSpacing: LETTER_SPACINGS[2].value
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

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Font Size</h3>
        <Select
          value={styles.fontSize}
          onValueChange={(value) => updateStyle('fontSize', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a font size" />
          </SelectTrigger>
          <SelectContent>
            {FONT_SIZES.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Line Height</h3>
        <Select
          value={styles.lineHeight}
          onValueChange={(value) => updateStyle('lineHeight', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a line height" />
          </SelectTrigger>
          <SelectContent>
            {LINE_HEIGHTS.map((lineHeight) => (
              <SelectItem key={lineHeight.value} value={lineHeight.value}>
                {lineHeight.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Letter Spacing</h3>
        <Select
          value={styles.letterSpacing}
          onValueChange={(value) => updateStyle('letterSpacing', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a letter spacing" />
          </SelectTrigger>
          <SelectContent>
            {LETTER_SPACINGS.map((spacing) => (
              <SelectItem key={spacing.value} value={spacing.value}>
                {spacing.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
