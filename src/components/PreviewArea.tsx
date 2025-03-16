
import { FONT_FAMILIES } from "@/constants/fonts";
import { cn } from "@/lib/utils";

type PreviewAreaProps = {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  customText?: string;
};

export default function PreviewArea({ 
  fontFamily, 
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  customText
}: PreviewAreaProps) {
  // Find the font definition for getting className
  const selectedFont = FONT_FAMILIES.find(f => f.value === fontFamily);
  const fontClass = selectedFont ? selectedFont.className : "font-sans";
  
  // Get example text from font definition or use custom text if provided
  const textToDisplay = customText || selectedFont?.sampleText || "The quick brown fox jumps over the lazy dog.";
  
  // Sample heading levels for preview
  const headings = [
    { level: "h1", class: "text-4xl mb-4 font-bold", text: "Heading Level 1" },
    { level: "h2", class: "text-3xl mb-3 font-semibold", text: "Heading Level 2" },
    { level: "h3", class: "text-2xl mb-2 font-medium", text: "Heading Level 3" },
    { level: "h4", class: "text-xl mb-2", text: "Heading Level 4" }
  ];
  
  return (
    <div className="rounded-md p-6 bg-card border">
      <div className={cn(
        fontClass,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
      )}>
        {headings.map((heading) => (
          <div 
            key={heading.level} 
            className={cn(
              heading.class,
              fontClass,
              fontWeight,
              lineHeight,
              letterSpacing
            )}
          >
            {heading.text}
          </div>
        ))}
        
        <p className="mb-4">
          {textToDisplay}
        </p>
        
        <p className="mb-4">
          This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <a href="#" className="text-primary underline">linked text</a> to demonstrate how different text styles look with the selected font settings.
        </p>
        
        <div className="space-y-2">
          <p className="text-sm opacity-80">Small text example</p>
          <p className="text-xs opacity-70">Extra small text example</p>
        </div>
      </div>
    </div>
  );
}
