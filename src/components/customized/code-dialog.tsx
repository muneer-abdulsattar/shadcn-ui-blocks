import { Code } from "lucide-react";
import SyntaxHighlighter from "../SyntaxHighlighter";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

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

    <DialogContent className="dark max-w-3xl p-0 border-none rounded-lg text-white">
      <ScrollArea
        className="max-h-[30rem] max-w-3xl [&>div]:!overflow-x-auto rounded"
        style={{ overflow: "unset" }}
      >
        <SyntaxHighlighter>{code}</SyntaxHighlighter>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);
