"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { absoluteUrl } from "@/lib/utils";
import { Check, Terminal } from "lucide-react";
import { Button } from "../ui/button";

export const BlockInstallCommandCopyButton = ({ block }: { block: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const installCommand = `npx shadcn add ${absoluteUrl(`/r/${block}.json`)}`;

  return (
    <Button
      variant="outline"
      className="font-mono text-xs"
      onClick={() => copyToClipboard(installCommand)}
    >
      {isCopied ? <Check className="text-green-500" /> : <Terminal />}
      {installCommand}
    </Button>
  );
};
