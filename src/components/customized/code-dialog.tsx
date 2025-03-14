import { getHighlightedCodeNodes } from "@/lib/shiki";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Code } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

export const CodeDialog = async ({ code }: { code: string }) => {
  const highlightedCodeNodes = await getHighlightedCodeNodes(code);

  return (
    <Dialog>
      <VisuallyHidden>
        <DialogTitle>Code Dialog</DialogTitle>
      </VisuallyHidden>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-muted-foreground"
        >
          <Code />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-0 border-none rounded-lg">
        <ScrollArea
          className="max-h-[30rem] max-w-3xl [&>div]:!overflow-x-auto rounded"
          style={{ overflow: "unset" }}
        >
          {highlightedCodeNodes}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
