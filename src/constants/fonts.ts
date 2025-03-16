
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

export const FONT_SIZES = [
  { value: "text-xs", label: "xs (0.75rem)" },
  { value: "text-sm", label: "sm (0.875rem)" },
  { value: "text-base", label: "base (1rem)" },
  { value: "text-lg", label: "lg (1.125rem)" },
  { value: "text-xl", label: "xl (1.25rem)" },
  { value: "text-2xl", label: "2xl (1.5rem)" },
  { value: "text-3xl", label: "3xl (1.875rem)" },
  { value: "text-4xl", label: "4xl (2.25rem)" },
  { value: "text-5xl", label: "5xl (3rem)" }
];

export const LINE_HEIGHTS = [
  { value: "leading-none", label: "None (1)" },
  { value: "leading-tight", label: "Tight (1.25)" },
  { value: "leading-snug", label: "Snug (1.375)" },
  { value: "leading-normal", label: "Normal (1.5)" },
  { value: "leading-relaxed", label: "Relaxed (1.625)" },
  { value: "leading-loose", label: "Loose (2)" }
];

export const LETTER_SPACINGS = [
  { value: "tracking-tighter", label: "Tighter (-0.05em)" },
  { value: "tracking-tight", label: "Tight (-0.025em)" },
  { value: "tracking-normal", label: "Normal (0)" },
  { value: "tracking-wide", label: "Wide (0.025em)" },
  { value: "tracking-wider", label: "Wider (0.05em)" },
  { value: "tracking-widest", label: "Widest (0.1em)" }
];
