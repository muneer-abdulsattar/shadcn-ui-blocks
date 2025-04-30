import { type VariantProps, cva } from "class-variance-authority";
import {
	CheckIcon,
	ChevronDown,
	WandSparkles,
	X,
	XCircle,
	XIcon,
} from "lucide-react";
import * as React from "react";

import { Command as CommandPrimitive } from "cmdk";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const DisplayIcon = ({
	icon,
	className,
}: {
	icon?: React.ComponentType<{ className?: string }> | string;
	className?: string;
}) => {
	if (!icon) return null;

	if (typeof icon === "string") {
		return <img src={icon} alt="icon" className="w-4 h-4" />;
	}

	const Icon = icon as React.ComponentType<{ className?: string }>;

	return <Icon className={cn("size-4", className)} />;
};

/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */
const multiSelectVariants = cva(
	"m-1 hover:scale-110 transition hover:-translate-y-1 duration-300 ease-in-out delay-150",
	{
		variants: {
			variant: {
				default:
					"border-foreground/10 text-foreground bg-card hover:bg-card/80",
				secondary:
					"border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				inverted: "inverted",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

interface AutoCompleteInlineProps
	extends VariantProps<typeof multiSelectVariants> {
	/**
	 * An array of option objects to be displayed in the multi-select component.
	 * Each option object has a label, value, and an optional icon.
	 */
	options: {
		/** The text to display for the option. */
		label: string;
		/** The unique value associated with the option. */
		value: string;
		/** Optional icon component to display alongside the option. */
		icon?: React.ComponentType<{ className?: string }> | string;
	}[];

	/**
	 * Callback function triggered when the selected values change.
	 * Receives an array of the new selected values.
	 */
	onSelect?: (
		value: {
			/** The text to display for the option. */
			label: string;
			/** The unique value associated with the option. */
			value: string;
		}[],
	) => void;

	/** The default selected values when the component mounts. */
	defaultValue?: {
		label: string;
		value: string;
		icon?: React.ComponentType<{ className?: string }>;
	}[];

	/**
	 * Placeholder text to be displayed when no values are selected.
	 * Optional, defaults to "Select options".
	 */
	placeholder?: string;

	/**
	 * Animation duration in seconds for the visual effects (e.g., bouncing badges).
	 * Optional, defaults to 0 (no animation).
	 */
	animation?: number;

	/**
	 * Maximum number of items to display. Extra selected items will be summarized.
	 * Optional, defaults to 3.
	 */
	maxCount?: number;

	/**
	 * The modality of the popover. When set to true, interaction with outside elements
	 * will be disabled and only popover content will be visible to screen readers.
	 * Optional, defaults to false.
	 */
	modalPopover?: boolean;

	/**
	 * If true, renders the multi-select component as a child of another component.
	 * Optional, defaults to false.
	 */
	asChild?: boolean;

	/**
	 * Additional class names to apply custom styles to the multi-select component.
	 * Optional, can be used to add custom styles.
	 */
	className?: string;

	/**
	 * If true, displays a loading indicator and hides the options.
	 * Optional, defaults to false.
	 */
	isLoading?: boolean;

	/**
	 * Callback function triggered when the input value changes.
	 * Receives the new input value as a string.
	 */
	onInputChange?: (value: string) => void;

	/**
	 * The mode of the multi-select component. When set to "single", only one option can be selected.
	 * Optional, defaults
	 * to "multiple".
	 * */

	mode?: "single" | "multiple";

	isFetchingNextPage?: boolean;
	fetchNextPage?: () => void;
}

export const PopoverAutoComplete = React.forwardRef<
	HTMLButtonElement,
	AutoCompleteInlineProps
>(
	(
		{
			options,
			onSelect,
			variant,
			defaultValue = [],
			placeholder = "Select options",
			animation = 0,
			maxCount = 3,
			modalPopover = false,
			asChild = false,
			className,
			isLoading = false,
			onInputChange,

			mode = "multiple",
			fetchNextPage,
			isFetchingNextPage,
			...props
		},
		ref,
	) => {
		const [selectedOptions, setSelectedOptions] = React.useState(defaultValue);
		const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
		const [isAnimating, setIsAnimating] = React.useState(false);

		const handleInputKeyDown = (
			event: React.KeyboardEvent<HTMLInputElement>,
		) => {
			if (event.key === "Enter") {
				setIsPopoverOpen(true);
			} else if (event.key === "Backspace" && !event.currentTarget.value) {
				const newSelectedOptions = [...selectedOptions];
				newSelectedOptions.pop();
				setSelectedOptions(newSelectedOptions);
				onSelect?.(newSelectedOptions);
			}
		};

		const toggleOption = (option: {
			label: string;
			value: string;
			icon?: React.ComponentType<{ className?: string }>;
		}) => {
			if (mode === "single") {
				setSelectedOptions([option] as { label: string; value: string }[]);
				onSelect?.([option] as { label: string; value: string }[]);

				return;
			}

			const newSelectedOptions = selectedOptions.some(
				(selected) => selected.value === option.value,
			)
				? selectedOptions.filter((selected) => selected.value !== option.value)
				: [...selectedOptions, option];
			setSelectedOptions(
				newSelectedOptions as { label: string; value: string }[],
			);
			onSelect?.(newSelectedOptions as { label: string; value: string }[]);
		};

		const handleClear = () => {
			setSelectedOptions([]);
			onSelect?.([]);
		};

		const handleTogglePopover = () => {
			setIsPopoverOpen((prev) => !prev);
		};

		const clearExtraOptions = () => {
			const newSelectedOptions = selectedOptions.slice(0, maxCount);
			setSelectedOptions(
				newSelectedOptions as { label: string; value: string }[],
			);
			onSelect?.(newSelectedOptions as { label: string; value: string }[]);
		};

		// const toggleAll = () => {
		// 	if (selectedOptions.length === options.length) {
		// 		handleClear();
		// 	} else {
		// 		setSelectedOptions(options);
		// 		onValueChange(options);
		// 	}
		// };

		React.useEffect(() => {
			if (!isPopoverOpen) {
				onInputChange?.("");
			}
		}, [isPopoverOpen]);

		React.useEffect(() => {
			if (defaultValue.length > 0) {
				setSelectedOptions(defaultValue.filter((d) => !!d));
			}
		}, [defaultValue]);

		return (
			<Popover
				open={isPopoverOpen}
				onOpenChange={setIsPopoverOpen}
				modal={modalPopover}
			>
				<PopoverTrigger asChild>
					<Button
						ref={ref}
						{...props}
						onClick={handleTogglePopover}
						className={cn(
							"flex w-full shadow-none p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-background hover:bg-primary/5 ",
							className,
						)}
					>
						{selectedOptions.length > 0 ? (
							<div className="flex justify-between items-center w-full">
								<div className="flex flex-wrap items-center">
									{mode === "single" ? (
										<Badge className="flex gap-2 bg-transparent text-foreground text-base">
											<DisplayIcon icon={selectedOptions[0].icon} />
											<p className="text-black dark:text-white">
												{selectedOptions?.[0]?.label}
											</p>
										</Badge>
									) : (
										<>
											{selectedOptions.slice(0, maxCount).map((option) => {
												const IconComponent = option.icon;
												return (
													<Badge
														key={option.value}
														className={cn(
															isAnimating ? "animate-bounce" : "",
															multiSelectVariants({ variant }),
														)}
														style={{ animationDuration: `${animation}s` }}
													>
														<DisplayIcon icon={IconComponent} />
														<span className="mx-2">{option.label}</span>
														<XCircle
															className="rtl:mr-2 ltr:ml-2 w-4 h-4 cursor-pointer"
															onClick={(event) => {
																event.stopPropagation();
																toggleOption(option);
															}}
														/>
													</Badge>
												);
											})}
											{selectedOptions.length > maxCount && (
												<Badge
													className={cn(
														"bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
														isAnimating ? "animate-bounce" : "",
														multiSelectVariants({ variant }),
													)}
													style={{ animationDuration: `${animation}s` }}
												>
													{`+ ${selectedOptions.length - maxCount} more`}
													<XCircle
														className="rtl:mr-2 ltr:ml-2 w-4 h-4 cursor-pointer"
														onClick={(event) => {
															event.stopPropagation();
															clearExtraOptions();
														}}
													/>
												</Badge>
											)}
										</>
									)}
								</div>
								<div className="flex justify-between items-center">
									<div
										className="p-1 px-2 rounded-md"
										onClick={(event) => {
											handleClear();
											event.stopPropagation();
										}}
									>
										<XIcon className="w-4 h-4 text-muted-foreground cursor-pointer" />
									</div>
									<Separator
										orientation="vertical"
										className="flex h-full min-h-6"
									/>
									<ChevronDown
										className={cn(
											"mx-2 h-4 duration-200 text-muted-foreground cursor-pointer",
											{
												"rotate-180": isPopoverOpen,
											},
										)}
									/>
								</div>
							</div>
						) : (
							<div className="flex justify-between items-center mx-auto w-full">
								<span className="mx-3 text-muted-foreground text-sm">
									{placeholder}
								</span>
								<ChevronDown
									className={cn(
										"mx-2 h-4 duration-200 text-muted-foreground cursor-pointer",
										{
											"rotate-180": isPopoverOpen,
										},
									)}
								/>
							</div>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="p-0 w-auto"
					align="start"
					onEscapeKeyDown={() => setIsPopoverOpen(false)}
				>
					<Command
						shouldFilter
						onSelect={(e) =>
							onInputChange?.((e.target as HTMLInputElement).value)
						}
					>
						<CommandInput
							autoFocus
							placeholder="Search..."
							onKeyDown={handleInputKeyDown}
						/>
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							{isLoading ? (
								<div className="flex justify-center items-center p-4">
									<span>Loading...</span>
								</div>
							) : (
								<ScrollArea className="flex flex-col max-h-40 overflow-y-auto">
									<CommandGroup>
										{options?.map((option) => {
											const isSelected = selectedOptions?.some(
												(selected) => selected?.value === option?.value,
											);
											return (
												<CommandItem
													key={option.value}
													onSelect={() => toggleOption(option)}
													className="cursor-pointer"
													value={option.value}
												>
													<div
														className={cn(
															"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
															isSelected
																? "bg-primary text-primary-foreground"
																: "opacity-50 [&_svg]:invisible",
														)}
													>
														<CheckIcon className="w-4 h-4" />
													</div>
													<div>
														<DisplayIcon icon={option.icon} />
													</div>
													<span>{option.label}</span>
												</CommandItem>
											);
										})}
									</CommandGroup>
								</ScrollArea>
							)}
							<CommandSeparator />
							<CommandGroup>
								<div className="flex justify-between items-center">
									{selectedOptions.length > 0 && (
										<>
											<CommandItem
												onSelect={handleClear}
												className="flex-1 justify-center cursor-pointer"
											>
												Clear
											</CommandItem>
											<Separator
												orientation="vertical"
												className="flex h-full min-h-6"
											/>
										</>
									)}
									<CommandItem
										onSelect={() => setIsPopoverOpen(false)}
										className="flex-1 justify-center max-w-full cursor-pointer"
									>
										Close
									</CommandItem>
								</div>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
				{animation > 0 && selectedOptions.length > 0 && (
					<WandSparkles
						className={cn(
							"cursor-pointer my-2 text-foreground bg-background w-3 h-3",
							isAnimating ? "" : "text-muted-foreground",
						)}
						onClick={() => setIsAnimating(!isAnimating)}
					/>
				)}
			</Popover>
		);
	},
);

PopoverAutoComplete.displayName = "PopoverAutoComplete";

type Option = {
	label: string;
	value: string;
	icon?: React.ComponentType<{ className?: string }> | string | undefined;
};

type InlineAutoCompleteProps = {
	options: Option[];
	mode?: "single" | "multiple";
	selected?: Option[];
	onSelect?: (value: Option[]) => void;
	placeholder?: string;
	onCreate?: (value: string) => void;
	isLoading?: boolean;

	setInputValue?: (value: string) => void;
	initialInputValue?: any;

	maxCount?: number;

	fetchNextPage?: () => void;
	isFetchingNextPage?: boolean;
};

export function InlineAutoComplete({
	options = [],
	mode = "single",
	selected = [],
	placeholder,
	onSelect,
	isLoading,
	setInputValue,
	initialInputValue = "",

	maxCount = 3,

	fetchNextPage,
	isFetchingNextPage,
}: InlineAutoCompleteProps) {
	const [inputValue, setInputValueState] = React.useState(initialInputValue);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [open, setOpen] = React.useState(false);
	const [localSelected, setLocalSelected] = React.useState<Option[]>(selected);

	const handleUnselect = React.useCallback(
		(singleOption: Option) => {
			setLocalSelected((prev) =>
				prev?.filter((s) => s.value !== singleOption.value),
			);
			if (onSelect) {
				if (mode === "single") {
					onSelect([]);
				} else {
					onSelect(localSelected.filter((s) => s.value !== singleOption.value));
				}
			}
		},
		[localSelected, mode, onSelect],
	);

	const handleKeyDown = React.useCallback(
		(e: React.KeyboardEvent<HTMLDivElement>) => {
			const input = inputRef.current;
			if (input) {
				if (e.key === "Delete" || e.key === "Backspace") {
					if (input.value === "") {
						setLocalSelected((prev) => {
							const newSelected = [...prev];
							newSelected.pop();
							if (onSelect) {
								onSelect(newSelected);
							}
							return newSelected;
						});
					}
				}
				if (e.key === "Escape") {
					input.blur();
				}
			}
		},
		[onSelect],
	);

	const selectables = options?.filter((singleOption) => {
		return !localSelected.some((s) => s.value === singleOption.value);
	});

	const handleSelect = (singleOption: Option) => {
		if (mode === "single") {
			setLocalSelected([singleOption]);
			if (onSelect) {
				onSelect([singleOption]);
			}
		} else {
			setLocalSelected((prev) => {
				const newSelected = [...prev, singleOption];
				if (onSelect) {
					onSelect(newSelected);
				}
				return newSelected;
			});
		}
		setInputValue?.("");
	};

	React.useEffect(() => {
		if (selected && selected?.length > 0) {
			setLocalSelected(selected?.filter((d) => !!d));
		}
	}, [selected]);

	return (
		<Command
			shouldFilter
			onKeyDown={handleKeyDown}
			className="bg-transparent overflow-visible"
		>
			<div className="group bg-background px-3 py-2 border border-input rounded-md focus-within:ring-2 focus-within:ring-ring ring-offset-background focus-within:ring-offset-2 text-sm">
				<div className="relative flex flex-wrap gap-1">
					<div
						onClick={() => inputRef.current?.focus()}
						className="top-0 right-0 absolute flex items-center gap-2"
					>
						{localSelected.length > 0 && (
							<X
								size={18}
								className="text-muted-foreground cursor-pointer"
								onClick={() => {
									setLocalSelected([]);
									if (onSelect) {
										onSelect([]);
									}
								}}
							/>
						)}

						<ChevronDown
							className={cn(
								"text-muted-foreground duration-200 cursor-pointer",
								{
									"rotate-180": open,
								},
							)}
						/>
					</div>
					{mode === "single" ? (
						<div onClick={() => setOpen(true)} className="flex items-center">
							<DisplayIcon icon={localSelected?.[0]?.icon} />
							<p className="mx-1 text-black dark:text-white">
								{localSelected?.[0]?.label}
							</p>
						</div>
					) : (
						<>
							{localSelected.slice(0, maxCount).map((singleOption) => (
								<Badge
									key={singleOption.value}
									variant="secondary"
									className="bg-card hover:bg-card/80 border-foreground/10 text-foreground"
								>
									<DisplayIcon icon={singleOption.icon} />
									<span className="mx-1">{singleOption.label}</span>
									<button
										type="button"
										className="mx-1 rounded-full outline-none focus:ring-2 focus:ring-ring ring-offset-background focus:ring-offset-2"
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												handleUnselect(singleOption);
											}
										}}
										onMouseDown={(e) => {
											e.preventDefault();
											e.stopPropagation();
										}}
										onClick={() => handleUnselect(singleOption)}
									>
										<XCircle className="w-4 h-4" />
									</button>
								</Badge>
							))}
							{localSelected.length > maxCount && (
								<>
									{" "}
									<Badge
										variant="secondary"
										className="bg-card hover:bg-card/80 border-foreground/10 text-foreground"
									>
										+ {localSelected.length - maxCount} more
										<button
											type="button"
											className="mx-1 rounded-full outline-none focus:ring-2 focus:ring-ring ring-offset-background focus:ring-offset-2"
											onClick={() => {
												setLocalSelected(localSelected.slice(0, maxCount));
											}}
										>
											<XCircle className="rtl:mr-2 ltr:ml-2 w-4 h-4" />
										</button>
									</Badge>
								</>
							)}
						</>
					)}

					<CommandPrimitive.Input
						ref={inputRef}
						value={inputValue}
						onValueChange={(value) => {
							setInputValueState(value);
							setInputValue?.(value);
						}}
						onBlur={() => setOpen(false)}
						onFocus={() => setOpen(true)}
						placeholder={placeholder}
						className="inline flex-1 bg-transparent ml-2 outline-none placeholder:text-muted-foreground"
					/>
				</div>
			</div>

			{open ? (
				<>
					<div className="relative mt-2">
						<CommandList>
							<div className="top-0 z-[99999999] absolute bg-popover shadow-md border rounded-md outline-none w-full text-popover-foreground animate-in">
								<CommandEmpty>No Data Found</CommandEmpty>
								<CommandGroup className="h-full overflow-auto">
									{isLoading ? (
										<CommandItem className="cursor-not-allowed pointer-events-none">
											Loading...
										</CommandItem>
									) : (
										<ScrollArea className="flex flex-col max-h-40 overflow-y-auto">
											{selectables?.map((singleOption) => (
												<CommandItem
													key={singleOption.value}
													onMouseDown={(e) => {
														e.preventDefault();
														e.stopPropagation();
													}}
													onSelect={() => handleSelect(singleOption)}
													className={"cursor-pointer"}
													value={singleOption.value}
												>
													<DisplayIcon icon={singleOption.icon} />
													{singleOption.label}
												</CommandItem>
											))}
										</ScrollArea>
									)}
								</CommandGroup>
							</div>
						</CommandList>
					</div>
				</>
			) : null}
		</Command>
	);
}
