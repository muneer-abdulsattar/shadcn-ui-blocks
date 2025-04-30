"use client";
import TagsInput from "@/components/extensions/tags-input";
import { useState } from "react";

export default function TagsInputDemo() {
	const [value, setValue] = useState<string[]>([]);
	return <TagsInput value={value} onValueChange={setValue} />;
}
