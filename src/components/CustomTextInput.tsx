
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type CustomTextInputProps = {
  onChange: (text: string) => void;
};

export default function CustomTextInput({ onChange }: CustomTextInputProps) {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onChange(newText);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="custom-text">Custom Preview Text</Label>
      <Textarea
        id="custom-text"
        placeholder="Enter custom text to preview with your selected font styles..."
        value={text}
        onChange={handleTextChange}
        className="resize-none h-20"
      />
    </div>
  );
}
