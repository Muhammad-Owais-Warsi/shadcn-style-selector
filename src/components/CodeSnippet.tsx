
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";

type CodeSnippetProps = {
  code: string;
};

export default function CodeSnippet({ code }: CodeSnippetProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied to clipboard",
        description: "The code has been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "There was an error copying the code",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 h-8 w-8"
          aria-label="Copy code to clipboard"
        >
          <Copy className="h-4 w-4" />
        </Button>
        <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
