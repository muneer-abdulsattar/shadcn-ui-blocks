import { Code } from "lucide-react";
import SyntaxHighlighter from "../SyntaxHighlighter";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export const CodeDialog = ({ code }: { code: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8 text-muted-foreground"
      >
        <Code />
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl p-0 border-none rounded-lg text-white">
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
    </DialogContent>
  </Dialog>
);
