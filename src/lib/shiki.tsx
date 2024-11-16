import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import {
  BundledLanguage,
  BundledTheme,
  codeToHast,
  CodeToHastOptions,
} from "shiki/bundle/web";
import { cn } from "./utils";

export async function highlight(
  code: string,
  options: CodeToHastOptions<BundledLanguage, BundledTheme>
) {
  const out = await codeToHast(code, options);

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props) => (
        <pre
          {...props}
          className={cn(
            props.className,
            "px-6 py-4 h-full text-sm dark:!bg-foreground/5"
          )}
          style={{ ...props.style, backgroundColor: undefined }}
        />
      ),
    },
  });
}
