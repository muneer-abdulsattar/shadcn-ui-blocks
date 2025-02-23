"use client";
import { highlight } from "@/lib/shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerRemoveLineBreak,
} from "@shikijs/transformers";
import { Loader2Icon } from "lucide-react";
import { useLayoutEffect, useState, type JSX } from "react";

export function CodeBlock({
  initial,
  code,
}: {
  initial?: JSX.Element;
  code: string;
}) {
  const [nodes, setNodes] = useState(initial);

  useLayoutEffect(() => {
    void highlight(code, {
      lang: "tsx",
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerRemoveLineBreak(),
      ],
    }).then(setNodes);
  }, [code]);

  return (
    nodes ?? (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2Icon className="animate-spin h-8 w-8" />
      </div>
    )
  );
}
