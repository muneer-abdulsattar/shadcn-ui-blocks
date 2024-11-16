"use client";
import { highlight } from "@/lib/shiki";
import { Loader2Icon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";

export function CodeBlock({
  initial,
  code,
}: {
  initial?: JSX.Element;
  code: string;
}) {
  const { resolvedTheme } = useTheme();
  const [nodes, setNodes] = useState(initial);

  useLayoutEffect(() => {
    void highlight(code, {
      lang: "tsx",
      theme: resolvedTheme === "light" ? "github-light" : "github-dark",
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
