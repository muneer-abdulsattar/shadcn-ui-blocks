"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.min.css";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useMemo, useRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import s from "./SyntaxHighlighter.module.css";

interface SyntaxHighlighterProps {
  children: string;
}

const SyntaxHighlighter = (props: SyntaxHighlighterProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const codeString = Array.isArray(props.children)
    ? props.children.join()
    : props.children;
  const codeRef = useRef<HTMLElement>(null);

  const result = useMemo(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("xml", xml);
    const result = hljs.highlight(codeString, { language: "javascript" });
    return result;
  }, [codeString]);

  return (
    <div className="relative">
      <Button
        size="icon"
        className="absolute top-2 right-5 border border-muted-foreground"
        onClick={() => copyToClipboard(codeString)}
      >
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </Button>
      <pre>
        <code
          ref={codeRef}
          className={cn("hljs", s.code)}
          dangerouslySetInnerHTML={{ __html: result?.value }}
        />
      </pre>
    </div>
  );
};

export default SyntaxHighlighter;
