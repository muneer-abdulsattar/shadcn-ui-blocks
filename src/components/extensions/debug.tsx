"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Debug({ data }) {
	// Nextjs
	if (process.env.NODE_ENV !== "development") return null;
	// Vite
	// if (import.meta.env.MODE !== "development") return null;

	return (
		<div className="relative">
			<Button
				onClick={() =>
					navigator.clipboard.writeText(JSON.stringify(data, null, 2))
				}
				variant="outline"
				size="icon"
				className="top-3 right-3 z-50 absolute"
			>
				<Copy />
			</Button>

			<SyntaxHighlighter language="json" style={coy}>
				{JSON.stringify(data, null, 2)}
			</SyntaxHighlighter>
		</div>
	);
}
