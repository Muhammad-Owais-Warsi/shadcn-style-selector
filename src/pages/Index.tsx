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
  ${selectedFont ? `font-family: ${selectedFont.label}, ${
    selectedFont.category === "Sans Serif" ? "sans-serif" :
    selectedFont.category === "Serif" ? "serif" :
    selectedFont.category === "Monospace" ? "monospace" :
    selectedFont.category
  };` : ""}
  ${fontStyles.fontWeight === "font-normal" ? "font-weight: 400;" :
    fontStyles.fontWeight === "font-medium" ? "font-weight: 500;" :
    fontStyles.fontWeight === "font-semibold" ? "font-weight: 600;" :
    fontStyles.fontWeight === "font-bold" ? "font-weight: 700;" : ""}
}

/* Tailwind HTML Example */
<p class="${fontStyles.fontFamily ? `font-${fontStyles.fontFamily}` : ""} ${fontStyles.fontWeight}">
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
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">Font & Theme Styler</h1>

      </div>
      <p className="text-muted-foreground text-center mb-10">
        Customize your typography and theme, then copy the code
      </p>

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
