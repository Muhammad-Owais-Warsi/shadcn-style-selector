
export type FontDefinition = {
  value: string;
  label: string;
  className: string;
  category: string;
  sampleText?: string;
};

export const FONT_FAMILIES: FontDefinition[] = [
  {
    value: "sans",
    label: "Inter",
    className: "font-sans",
    category: "Sans Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "serif",
    label: "Georgia",
    className: "font-serif",
    category: "Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "mono",
    label: "Roboto Mono",
    className: "font-mono",
    category: "Monospace",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "display",
    label: "Oswald",
    className: "font-display",
    category: "Display",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "heading",
    label: "Playfair Display",
    className: "font-heading",
    category: "Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "poppins",
    label: "Poppins",
    className: "font-poppins",
    category: "Sans Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "space-grotesk",
    label: "Space Grotesk",
    className: "font-space-grotesk",
    category: "Sans Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "geist",
    label: "Geist",
    className: "font-geist",
    category: "Sans Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "montserrat",
    label: "Montserrat",
    className: "font-montserrat",
    category: "Sans Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "handwriting",
    label: "Dancing Script",
    className: "font-handwriting",
    category: "Handwriting",
    sampleText: "The quick brown fox jumps over the lazy dog."
  },
  {
    value: "system",
    label: "System UI",
    className: "font-system",
    category: "Sans Serif",
    sampleText: "The quick brown fox jumps over the lazy dog."
  }
];

export const FONT_WEIGHTS = [
  { value: "font-normal", label: "Normal (400)" },
  { value: "font-medium", label: "Medium (500)" },
  { value: "font-semibold", label: "Semibold (600)" },
  { value: "font-bold", label: "Bold (700)" }
];
