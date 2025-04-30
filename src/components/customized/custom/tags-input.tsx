"use client";

import { TagsInput } from "@/components/extensions/tags-input";
import { useState } from "react";

export default function TagsInputDemo() {
	const [value, setValue] = useState<string[]>(["tag1", "tag2"]);

	return (
		<div className="flex flex-wrap">
			<TagsInput value={value} onValueChange={setValue} />
		</div>
	);
}
