"use client";

import { CheckIcon, ChevronDownIcon, Loader2, X } from "lucide-react";
import * as React from "react";
import { forwardRef, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Icon =
	| React.ComponentType<{ className?: string }>
	| React.ReactElement
	| string;

const DisplayIcon = ({
	icon,
	className,
}: {
	icon?: Icon;
	className?: string;
}) => {
	if (!icon) return null;

	// Case 1: String (image URL)
	if (typeof icon === "string") {
		return <img src={icon} alt="icon" className="w-4 h-4" />;
	}

	// Case 2: Already rendered ReactElement
	if (React.isValidElement(icon)) {
		return icon;
	}

	// Case 3: Component type that needs to be rendered
	const Icon = icon;
	return <Icon className={cn("size-4", className)} />;
};

export interface Option {
	StartIcon?: Icon;

	value: string;
	label: string;
	disable?: boolean;
	/** Group the options by providing key. */
	[key: string]: string | boolean | Icon | undefined;
}

export function useDebounce<T>(value: T, delay?: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}

interface GroupOption {
	[key: string]: Option[];
}

function transToGroupOption(options: Option[], groupBy?: string) {
	if (options.length === 0) {
		return {};
	}
	if (!groupBy) {
		return {
			"": options,
		};
	}

	const groupOption: GroupOption = {};
	for (const option of options) {
		const key = (option[groupBy] as string) || "";
		if (!groupOption[key]) {
			groupOption[key] = [];
		}
		groupOption[key].push(option);
	}
	return groupOption;
}

export interface BetterSelectProps {
	/** The selected value */
	value?: string | null;
	/** Callback when value changes */
	onChange?: (value: string | null) => void;
	/** Default options to show */
	defaultOptions?: Option[];
	/** Manually controlled options */
	options?: Option[];
	/** Placeholder when no value is selected */
	placeholder?: string;
	/** Placeholder for search input */
	searchPlaceholder?: string;
	/** Message when no options match the search */
	emptyMessage?: string;
	/** Loading component shown during async search */
	loadingIndicator?: React.ReactNode;
	/** Custom empty component when no options match */
	emptyIndicator?: React.ReactNode;
	/** Debounce time for async search */
	delay?: number;
	/** Trigger search when focused */
	triggerSearchOnFocus?: boolean;
	/** Async search function */
	onSearch?: (value: string) => Promise<Option[]>;
	/** Sync search function */
	onSearchSync?: (value: string) => Option[];
	/** Is the select disabled */
	disabled?: boolean;
	/** Group the options by a key */
	groupBy?: string;
	/** CSS class for the trigger button */
	className?: string;
	/** PopoverContent alignment */
	align?: "center" | "start" | "end";
	/** Button variant */
	variant?: "default" | "outline" | "secondary" | "ghost";
	/** Props for the Command component */
	commandProps?: React.ComponentPropsWithoutRef<typeof Command>;
	/** Props for the CommandInput component */
	inputProps?: Omit<
		React.ComponentPropsWithoutRef<typeof CommandInput>,
		"value" | "placeholder" | "disabled"
	>;
	/** Allow user to create an option when no match */
	creatable?: boolean;
	/** Callback when a new option is created */
	onCreate?: (value: string) => void;
	/** Include clear button */
	clearable?: boolean;
	// Show Search Input
	showSearchInput?: boolean;
}

export interface BetterSelectRef {
	selectedValue: string | null;
	input: HTMLInputElement | null;
	focus: () => void;
	reset: () => void;
}

const BetterSelect = forwardRef<BetterSelectRef, BetterSelectProps>(
	(
		{
			showSearchInput = false,
			value,
			onChange,
			placeholder = "Select an option",
			searchPlaceholder = "Search...",
			emptyMessage = "No option found.",
			defaultOptions = [],
			options: controlledOptions,
			delay,
			onSearch,
			onSearchSync,
			loadingIndicator,
			emptyIndicator,
			disabled = false,
			groupBy,
			className,
			variant = "outline",
			align = "start",
			triggerSearchOnFocus = false,
			commandProps,
			inputProps,
			creatable = false,
			onCreate,
			clearable = false,
		},
		ref,
	) => {
		const [open, setOpen] = useState(false);
		const [selectedValue, setSelectedValue] = useState<string | null>(
			value || null,
		);
		const [inputValue, setInputValue] = useState("");
		const [isLoading, setIsLoading] = useState(false);
		const [localOptions, setLocalOptions] = useState<GroupOption>(
			transToGroupOption(defaultOptions, groupBy),
		);
		const inputRef = React.useRef<HTMLInputElement>(null);
		const dropdownRef = React.useRef<HTMLDivElement>(null);
		const debouncedSearchTerm = useDebounce(inputValue, delay || 500);

		// For ref forwarding
		React.useImperativeHandle(
			ref,
			() => ({
				selectedValue,
				input: inputRef.current,
				focus: () => inputRef?.current?.focus(),
				reset: () => {
					setSelectedValue(null);
					onChange?.(null);
				},
			}),
			[selectedValue, onChange],
		);

		// Handle click outside
		useEffect(() => {
			const handleClickOutside = (event: MouseEvent | TouchEvent) => {
				if (
					dropdownRef.current &&
					!dropdownRef.current.contains(event.target as Node)
				) {
					setOpen(false);
				}
			};

			if (open) {
				document.addEventListener("mousedown", handleClickOutside);
				document.addEventListener("touchend", handleClickOutside);
			} else {
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("touchend", handleClickOutside);
			}

			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("touchend", handleClickOutside);
			};
		}, [open]);

		// Sync with external value
		useEffect(() => {
			if (value !== undefined) {
				setSelectedValue(value);
			}
		}, [value]);

		// Update options when controlled options change
		useEffect(() => {
			if (!controlledOptions || onSearch) {
				return;
			}
			const newOptions = transToGroupOption(controlledOptions, groupBy);
			setLocalOptions(newOptions);
		}, [controlledOptions, groupBy, onSearch]);

		// Handle synchronous search
		useEffect(() => {
			const doSearchSync = () => {
				const res = onSearchSync?.(debouncedSearchTerm);
				if (res) {
					setLocalOptions(transToGroupOption(res, groupBy));
				}
			};

			const exec = () => {
				if (!onSearchSync || !open) return;

				if (triggerSearchOnFocus) {
					doSearchSync();
				}

				if (debouncedSearchTerm) {
					doSearchSync();
				}
			};

			exec();
		}, [
			debouncedSearchTerm,
			groupBy,
			onSearchSync,
			open,
			triggerSearchOnFocus,
		]);

		// Handle asynchronous search
		useEffect(() => {
			const doSearch = async () => {
				setIsLoading(true);
				try {
					const res = await onSearch?.(debouncedSearchTerm);
					if (res) {
						setLocalOptions(transToGroupOption(res, groupBy));
					}
				} finally {
					setIsLoading(false);
				}
			};

			const exec = async () => {
				if (!onSearch || !open) return;

				if (triggerSearchOnFocus) {
					await doSearch();
				}

				if (debouncedSearchTerm) {
					await doSearch();
				}
			};

			void exec();
		}, [debouncedSearchTerm, groupBy, onSearch, open, triggerSearchOnFocus]);

		// Get the selected option's label
		const getSelectedLabel = () => {
			if (!selectedValue) return null;

			for (const [, options] of Object.entries(localOptions)) {
				const found = options.find((option) => option.value === selectedValue);
				if (found) return found.label;
			}

			// If we're using default/controlled options, check those too
			const allOptions = [...defaultOptions, ...(controlledOptions || [])];
			const found = allOptions.find((option) => option.value === selectedValue);

			return found?.label || selectedValue;
		};

		// Handle creatable item
		const CreatableItem = () => {
			if (!creatable || !inputValue || isLoading) return null;

			// Check if the input value already exists
			let exists = false;
			for (const [, options] of Object.entries(localOptions)) {
				if (
					options.some(
						(option) =>
							option.value === inputValue ||
							option.label.toLowerCase() === inputValue.toLowerCase(),
					)
				) {
					exists = true;
					break;
				}
			}

			if (exists) return null;

			return (
				<CommandItem
					value={inputValue}
					className="cursor-pointer"
					onMouseDown={(e) => {
						e.preventDefault();
						e.stopPropagation();
					}}
					onSelect={(value: string) => {
						if (onCreate) {
							onCreate(value);
							return;
						}

						setSelectedValue(value);
						onChange?.(value);
						setOpen(false);
						setInputValue("");
					}}
				>
					{`Create "${inputValue}"`}
				</CommandItem>
			);
		};

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant={variant}
						role="combobox"
						aria-expanded={open}
						disabled={disabled}
						className={cn(
							"justify-between bg-background hover:bg-background px-3 border-input outline-none focus-visible:outline-[3px] outline-offset-0 w-full font-normal",
							className,
						)}
						onClick={() => setOpen(!open)}
					>
						<div className="flex items-center gap-1">
							<DisplayIcon
								icon={
									Object.values(localOptions)
										.flat()
										.find((option) => option.value === selectedValue)?.StartIcon
								}
								className="mr-2"
							/>

							<span
								className={cn(
									"truncate",
									!selectedValue && "text-muted-foreground",
								)}
							>
								{getSelectedLabel() || placeholder}
							</span>
						</div>
						<div className="flex items-center gap-1">
							{clearable && selectedValue && (
								<div
									onClick={(e) => {
										e.stopPropagation();
										setSelectedValue(null);
										onChange?.(null);
									}}
									className="text-muted-foreground/80 hover:text-foreground cursor-pointer shrink-0"
								>
									<X size={16} className=" " />
								</div>
							)}
							<ChevronDownIcon
								size={16}
								className="text-muted-foreground/80 shrink-0"
								aria-hidden="true"
							/>
						</div>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					ref={dropdownRef}
					className="p-0 border-input w-full min-w-[var(--radix-popper-anchor-width)]"
					align={align}
				>
					<Command
						{...commandProps}
						className={cn(
							"h-auto overflow-visible bg-transparent",
							commandProps?.className,
						)}
						shouldFilter={
							commandProps?.shouldFilter !== undefined
								? commandProps.shouldFilter
								: !onSearch
						}
					>
						{showSearchInput && (
							<CommandInput
								ref={inputRef}
								{...inputProps}
								placeholder={searchPlaceholder}
								value={inputValue}
								onValueChange={setInputValue}
								className={cn(inputProps?.className)}
							/>
						)}
						<CommandList>
							{isLoading ? (
								<div className="flex justify-center items-center py-6">
									{loadingIndicator || (
										<Loader2 className="w-6 h-6 text-muted-foreground animate-spin" />
									)}
								</div>
							) : (
								<>
									{emptyIndicator ? (
										<CommandEmpty>{emptyIndicator}</CommandEmpty>
									) : (
										<CommandEmpty>{emptyMessage}</CommandEmpty>
									)}
									{CreatableItem()}
									{Object.entries(localOptions).map(([key, groupOptions]) => (
										<CommandGroup
											key={key}
											heading={key}
											className="h-full overflow-auto"
										>
											{groupOptions.map((option) => (
												<CommandItem
													key={option.value}
													value={option.value}
													disabled={option.disable}
													onSelect={(currentValue) => {
														setSelectedValue(currentValue);
														onChange?.(currentValue);
														setOpen(false);
														setInputValue("");
													}}
													className={cn(
														"cursor-pointer",
														option.disable &&
															"cursor-default text-muted-foreground",
													)}
												>
													<DisplayIcon icon={option.StartIcon} />
													{option.label}
													{selectedValue === option.value && (
														<CheckIcon size={16} className="ml-auto" />
													)}
												</CommandItem>
											))}
										</CommandGroup>
									))}
								</>
							)}
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		);
	},
);

BetterSelect.displayName = "BetterSelect";
export default BetterSelect;
