"use client";
import BetterSelect from "@/components/extensions/better-select";
import { Home } from "lucide-react";
import { useState } from "react";

export default function BetterSelectDemo() {
	const [options, setOptions] = useState([
		{
			label: "Option 1",
			value: "option1",
			StartIcon: Home,
		},
		{
			label: "Option 2",
			value: "option2",
		},
		{
			label: "Option 3",
			value: "option3",
		},
	]);
	const [value, setValue] = useState<string | null>(null);
	return (
		<div className="flex flex-wrap gap-3">
			<BetterSelect onChange={setValue} value={value} options={options} />
			<BetterSelect
				clearable
				onChange={setValue}
				value={value}
				showSearchInput
				options={options}
			/>
		</div>
	);
}
