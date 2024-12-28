"use client";

import { cn } from "@/lib/utils";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.min.css";
import { useMemo, useRef } from "react";
import s from "./SyntaxHighlighter.module.css";

interface SyntaxHighlighterProps {
  children: string;
}

const SyntaxHighlighter = (props: SyntaxHighlighterProps) => {
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
    <pre className="border-none">
      <code
        ref={codeRef}
        className={cn("hljs", s.code)}
        dangerouslySetInnerHTML={{ __html: result?.value }}
      />
    </pre>
  );
};

export default SyntaxHighlighter;
