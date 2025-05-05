"use client";
import BetterSelect, {
	type Option,
} from "@/components/extensions/better-select";
import { useState } from "react";

const OPTIONS: Option[] = [
	{ label: "nextjs", value: "nextjs" },
	{ label: "React", value: "react" },
	{ label: "Remix", value: "remix" },
	{ label: "Vite", value: "vite" },
	{ label: "Nuxt", value: "nuxt" },
	{ label: "Vue", value: "vue" },
	{ label: "Svelte", value: "svelte" },
	{ label: "Angular", value: "angular" },
	{ label: "Ember", value: "ember", disable: true },
	{ label: "Gatsby", value: "gatsby", disable: true },
	{ label: "Astro", value: "astro" },
];

export default function BetterSelectDemo() {
	return (
		<div className="gap-3 grid">
			<NormalSelect />
			<AsyncSearchWithDebounce />
			<CreateAbleOne />
		</div>
	);
}

const NormalSelect = () => {
	const [value, setValue] = useState<Option[]>([]);

	return (
		<BetterSelect
			value={value}
			onChange={setValue}
			options={OPTIONS}
			placeholder="select your frameworks"
			maxSelected={1}
		/>
	);
};

const AsyncSearchWithDebounce = () => {
	const [value, setValue] = useState<Option[]>([]);

	const mockSearch = async (value: string): Promise<Option[]> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const filteredOptions = OPTIONS.filter((option) =>
					option.label.toLowerCase().includes(value.toLowerCase()),
				);

				resolve(filteredOptions);
			}, 1000);
		});
	};

	return (
		<BetterSelect
			value={value}
			onChange={setValue}
			hidePlaceholderWhenSelected
			onSearch={mockSearch}
			triggerSearchOnFocus
			delay={1000}
			placeholder="search your framework"
			maxSelected={1}
			loadingIndicator={<div>Loading....</div>}
			emptyIndicator={<div>your list is empty</div>}
		/>
	);
};

const CreateAbleOne = () => {
	const [value, setValue] = useState<Option[]>([]);

	return (
		<BetterSelect
			value={value}
			creatable
			onCreate={(value) => {
				// some backend logic to create the item
				console.log("backend logic to create");
				setValue((prev) => [
					...prev,
					{
						label: value,
						value: value,
					},
				]);
			}}
			onChange={setValue}
			options={OPTIONS}
			placeholder="Select or create your framework"
			maxSelected={1}
		/>
	);
};
