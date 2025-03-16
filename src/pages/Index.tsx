import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import FontSelector from "@/components/FontSelector";
import ThemeSelector from "@/components/ThemeSelector";
import PreviewArea from "@/components/PreviewArea";
import CodeSnippet from "@/components/CodeSnippet";
import CustomTextInput from "@/components/CustomTextInput";
import { FONT_FAMILIES } from "@/constants/fonts";
import { ThemeDefinition } from "@/constants/themes";

const FontStyler = () => {
  const [customText, setCustomText] = useState("");
  const [fontStyles, setFontStyles] = useState({
    fontFamily: FONT_FAMILIES[0].value,
    fontWeight: "font-normal",
    fontSize: "text-base",
    lineHeight: "leading-normal",
    letterSpacing: "tracking-normal"
  });
  
  const [selectedTheme, setSelectedTheme] = useState<ThemeDefinition | null>(null);
  
  useEffect(() => {
    if (selectedTheme) {
      Object.entries(selectedTheme.cssVars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }, [selectedTheme]);
  
  const generateCSSCode = () => {
    const selectedFont = FONT_FAMILIES.find(f => f.value === fontStyles.fontFamily);
    
    return `/* Tailwind CSS Classes */
.custom-text {
  ${selectedFont ? `font-family: ${selectedFont.label}, ${selectedFont.category === "Sans Serif" ? "sans-serif" : 
                    selectedFont.category === "Serif" ? "serif" : 
                    selectedFont.category === "Monospace" ? "monospace" : 
                    selectedFont.category};` : ""}
  ${fontStyles.fontWeight === "font-normal" ? "font-weight: 400;" :
    fontStyles.fontWeight === "font-medium" ? "font-weight: 500;" :
    fontStyles.fontWeight === "font-semibold" ? "font-weight: 600;" :
    fontStyles.fontWeight === "font-bold" ? "font-weight: 700;" : ""}
  ${fontStyles.fontSize === "text-xs" ? "font-size: 0.75rem;" : 
    fontStyles.fontSize === "text-sm" ? "font-size: 0.875rem;" :
    fontStyles.fontSize === "text-base" ? "font-size: 1rem;" :
    fontStyles.fontSize === "text-lg" ? "font-size: 1.125rem;" : 
    fontStyles.fontSize === "text-xl" ? "font-size: 1.25rem;" :
    fontStyles.fontSize === "text-2xl" ? "font-size: 1.5rem;" :
    fontStyles.fontSize === "text-3xl" ? "font-size: 1.875rem;" :
    fontStyles.fontSize === "text-4xl" ? "font-size: 2.25rem;" :
    fontStyles.fontSize === "text-5xl" ? "font-size: 3rem;" : ""}
  ${fontStyles.lineHeight === "leading-none" ? "line-height: 1;" :
    fontStyles.lineHeight === "leading-tight" ? "line-height: 1.25;" :
    fontStyles.lineHeight === "leading-snug" ? "line-height: 1.375;" :
    fontStyles.lineHeight === "leading-normal" ? "line-height: 1.5;" :
    fontStyles.lineHeight === "leading-relaxed" ? "line-height: 1.625;" :
    fontStyles.lineHeight === "leading-loose" ? "line-height: 2;" : ""}
  ${fontStyles.letterSpacing === "tracking-tighter" ? "letter-spacing: -0.05em;" :
    fontStyles.letterSpacing === "tracking-tight" ? "letter-spacing: -0.025em;" :
    fontStyles.letterSpacing === "tracking-normal" ? "letter-spacing: 0;" :
    fontStyles.letterSpacing === "tracking-wide" ? "letter-spacing: 0.025em;" :
    fontStyles.letterSpacing === "tracking-wider" ? "letter-spacing: 0.05em;" :
    fontStyles.letterSpacing === "tracking-widest" ? "letter-spacing: 0.1em;" : ""}
}

/* Tailwind HTML Example */
<p class="${fontStyles.fontFamily ? `font-${fontStyles.fontFamily}` : ""} ${fontStyles.fontWeight} ${fontStyles.fontSize} ${fontStyles.lineHeight} ${fontStyles.letterSpacing}">
  Your text here
</p>`;
  };

  const generateThemeCode = () => {
    if (!selectedTheme) return "";

    return `/** 
 * ${selectedTheme.label} Theme
 * Add these CSS variables to your globals.css file
 */

:root {
${Object.entries(selectedTheme.cssVars)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join('\n')}
}

/* In Tailwind config */
theme: {
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      // ... other color definitions
    }
  }
}`;
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Font & Theme Styler</h1>
        <p className="text-muted-foreground">Customize your typography and theme, then copy the code</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Tabs defaultValue="font">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="font">Font Settings</TabsTrigger>
              <TabsTrigger value="theme">Theme</TabsTrigger>
            </TabsList>
            
            <TabsContent value="font" className="p-4 border rounded-md mt-2">
              <FontSelector onChange={setFontStyles} />
              <Separator className="my-4" />
              <CustomTextInput onChange={setCustomText} />
            </TabsContent>
            
            <TabsContent value="theme" className="p-4 border rounded-md mt-2">
              <ThemeSelector onChange={setSelectedTheme} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                See how your selected font and theme look together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PreviewArea 
                fontFamily={fontStyles.fontFamily}
                fontWeight={fontStyles.fontWeight}
                fontSize={fontStyles.fontSize}
                lineHeight={fontStyles.lineHeight}
                letterSpacing={fontStyles.letterSpacing}
                customText={customText}
              />
            </CardContent>
          </Card>

          <Tabs defaultValue="font-code">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="font-code">Font Code</TabsTrigger>
              <TabsTrigger value="theme-code">Theme Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="font-code" className="mt-2">
              <CodeSnippet code={generateCSSCode()} />
            </TabsContent>
            
            <TabsContent value="theme-code" className="mt-2">
              <CodeSnippet code={generateThemeCode()} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FontStyler;
