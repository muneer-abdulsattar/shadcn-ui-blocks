"use client";
import {
	InlineAutoComplete,
	PopoverAutoComplete,
} from "@/components/extensions/auto-complete";
import { Home, HomeIcon } from "lucide-react";
import { useState } from "react";

export default function AutoCompleteDemo() {
	return (
		<div className="gap-2 grid">
			<div>
				<p>Single inline</p>
				<InlineSingleAutoComplete />
			</div>
			<div>
				<p>multi inline</p>
				<InlineMultiAutoComplete />
			</div>
			<div>
				<p>Single Popover</p>
				<PopoverSingleAutoComplete />
			</div>
		</div>
	);
}

const InlineSingleAutoComplete = () => {
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState<
		Array<{ label: string; value: string }>
	>([
		{
			label: "Apple",
			value: "apple",
			icon: Home as any,
		},
	]);
	return (
		<InlineAutoComplete
			selected={options}
			onSelect={setOptions}
			setInputValue={setInputValue}
			initialInputValue={inputValue}
			mode="single"
			options={[
				{
					label: "Apple",
					value: "apple",
					icon: HomeIcon,
				},
				{
					label: "Banana",
					value: "banana",
					icon: Home,
				},
				{
					label: "Orange",
					value: "orange",
					icon: Home,
				},
			]}
		/>
	);
};
const InlineMultiAutoComplete = () => {
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState([
		{
			label: "Apple",
			value: "apple",
			icon: Home as any,
		},
		{
			label: "Banana",
			value: "banana",
		},
	]);
	return (
		<InlineAutoComplete
			selected={options}
			onSelect={setOptions}
			setInputValue={setInputValue}
			initialInputValue={inputValue}
			mode="multiple"
			options={[
				{
					label: "Apple",
					value: "apple",
					icon: HomeIcon,
				},
				{
					label: "Banana",
					value: "banana",
					icon: HomeIcon,
				},
				{
					label: "Orange",
					value: "orange",
				},
			]}
		/>
	);
};
const PopoverSingleAutoComplete = () => {
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState<
		Array<{ label: string; value: string }>
	>([
		{
			label: "Apple",
			value: "apple",
		},
	]);
	return (
		<PopoverAutoComplete
			defaultValue={[
				{
					label: "Apple",
					value: "apple",
					icon: Home,
				},
			]}
			mode="single"
			options={[
				{
					label: "Apple",
					value: "apple",
				},
				{
					label: "Banana",
					value: "banana",
				},
				{
					label: "Orange",
					value: "orange",
				},
			]}
		/>
	);
};
const PopoverMultiAutoComplete = () => {
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState<
		Array<{ label: string; value: string }>
	>([
		{
			label: "Apple",
			value: "apple",
		},
		{
			label: "Banana",
			value: "banana",
		},
	]);
	return (
		<InlineAutoComplete
			selected={options}
			onSelect={setOptions}
			setInputValue={setInputValue}
			initialInputValue={inputValue}
			mode="multiple"
			options={[
				{
					label: "Apple",
					value: "apple",
				},
				{
					label: "Banana",
					value: "banana",
				},
				{
					label: "Orange",
					value: "orange",
				},
			]}
		/>
	);
};
