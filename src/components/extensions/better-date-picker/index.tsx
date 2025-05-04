"use client";

import { getLocalTimeZone, today } from "@internationalized/date";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
	Button,
	CalendarCell as CalendarCellRac,
	CalendarGridBody as CalendarGridBodyRac,
	CalendarGridHeader as CalendarGridHeaderRac,
	CalendarGrid as CalendarGridRac,
	CalendarHeaderCell as CalendarHeaderCellRac,
	Calendar as CalendarRac,
	DatePicker as DatePickerRac,
	DateRangePicker as DateRangePickerRac,
	Dialog,
	Group,
	Heading as HeadingRac,
	Label,
	Popover,
	RangeCalendar as RangeCalendarRac,
	composeRenderProps,
} from "react-aria-components";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DateInput, dateInputStyle } from "./datefield";

/**
 * Enhanced DatePicker Component
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the date picker
 * @param {boolean} props.isRange - Whether to use range selection mode
 * @param {Date | undefined} props.defaultValue - Default date value (for single mode)
 * @param {Object | undefined} props.defaultRange - Default range value (for range mode)
 * @param {function} props.onChange - Callback when date changes
 * @param {string} props.className - Additional class names
 */
export function EnhancedDatePicker({
	label = "Date",
	isRange = false,
	defaultValue,
	defaultRange,
	onChange,
	className,
	...props
}: {
	label?: string;
	isRange?: boolean;
	defaultValue?: Date;
	defaultRange?: { start: Date; end: Date };
	onChange: (value: Date | { start: Date; end: Date }) => void;
	className?: string;
}) {
	// Set up date handlers for dropdown selects
	const handleCalendarChange = (_value, _e) => {
		const _event = {
			target: {
				value: String(_value),
			},
		};
		_e(_event);
	};

	// Common calendar header with month/year dropdowns
	const EnhancedCalendarHeader = () => {
		return (
			<header className="flex items-center gap-1 pb-1 w-full">
				<Button
					slot="previous"
					className="flex justify-center items-center hover:bg-accent rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-muted-foreground/80 hover:text-foreground transition-[color,box-shadow]"
				>
					<ChevronLeftIcon size={16} />
				</Button>
				<div className="flex justify-center items-center gap-2 grow">
					<HeadingRac className="sr-only" />
					<EnhancedDropdown />
				</div>
				<Button
					slot="next"
					className="flex justify-center items-center hover:bg-accent rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 size-9 text-muted-foreground/80 hover:text-foreground transition-[color,box-shadow]"
				>
					<ChevronRightIcon size={16} />
				</Button>
			</header>
		);
	};

	// Enhanced dropdown for month/year selection
	const EnhancedDropdown = () => {
		return (
			<div className="flex items-center gap-2 text-sm">
				{(props) => (
					<div className="flex items-center gap-2 w-full">{props.children}</div>
				)}
			</div>
		);
	};

	// Dropdown component for month/year selection
	const CustomDropdown = (props) => {
		return (
			<Select
				value={String(props.value)}
				onValueChange={(value) => {
					if (props.onChange) {
						handleCalendarChange(value, props.onChange);
					}
				}}
			>
				<SelectTrigger className="w-fit h-8 font-medium first:grow">
					<SelectValue />
				</SelectTrigger>
				<SelectContent className="max-h-[min(16rem,var(--radix-select-content-available-height))]">
					{props.options?.map((option) => (
						<SelectItem
							key={option.value}
							value={String(option.value)}
							disabled={option.disabled}
						>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		);
	};

	// Calendar grid component
	const CalendarGridComponent = ({ isRange = false }) => {
		const now = today(getLocalTimeZone());

		return (
			<CalendarGridRac>
				<CalendarGridHeaderRac>
					{(day) => (
						<CalendarHeaderCellRac className="p-0 rounded-md size-9 font-medium text-muted-foreground/80 text-xs">
							{day}
						</CalendarHeaderCellRac>
					)}
				</CalendarGridHeaderRac>
				<CalendarGridBodyRac className="[&_td]:px-0 [&_td]:py-px">
					{(date) => (
						<CalendarCellRac
							date={date}
							className={cn(
								"text-foreground data-hovered:bg-accent data-selected:bg-primary data-hovered:text-foreground data-selected:text-primary-foreground data-focus-visible:ring-ring/50 relative flex size-9 items-center justify-center rounded-md p-0 text-sm font-normal whitespace-nowrap [transition-property:color,background-color,border-radius,box-shadow] duration-150 outline-none data-disabled:pointer-events-none data-disabled:opacity-30 data-focus-visible:z-10 data-focus-visible:ring-[3px] data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-30",
								// Range-specific styles
								isRange &&
									"data-selected:bg-accent data-selected:text-foreground data-invalid:data-selection-end:bg-destructive data-invalid:data-selection-start:bg-destructive data-selection-end:bg-primary data-selection-start:bg-primary data-selection-end:text-primary-foreground data-selection-start:text-primary-foreground data-invalid:bg-red-100 data-selected:rounded-none data-selection-end:rounded-e-md data-invalid:data-selection-end:text-white data-selection-start:rounded-s-md data-invalid:data-selection-start:text-white",
								// Today indicator styles
								date.compare(now) === 0 &&
									cn(
										"after:bg-primary after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full",
										isRange
											? "data-selection-end:after:bg-background data-selection-start:after:bg-background"
											: "data-selected:after:bg-background",
									),
							)}
						/>
					)}
				</CalendarGridBodyRac>
			</CalendarGridRac>
		);
	};

	// Enhanced single date calendar
	const EnhancedCalendar = ({ className, ...props }) => {
		return (
			<CalendarRac
				{...props}
				className={composeRenderProps(className, (className) =>
					cn("w-fit", className),
				)}
			>
				<EnhancedCalendarHeader />
				<CalendarGridComponent />
			</CalendarRac>
		);
	};

	// Enhanced range calendar
	const EnhancedRangeCalendar = ({ className, ...props }) => {
		return (
			<RangeCalendarRac
				{...props}
				className={composeRenderProps(className, (className) =>
					cn("w-fit", className),
				)}
			>
				<EnhancedCalendarHeader />
				<CalendarGridComponent isRange />
			</RangeCalendarRac>
		);
	};

	// Render single date picker
	if (!isRange) {
		return (
			<DatePickerRac
				defaultValue={defaultValue}
				onChange={onChange}
				className={cn("*:not-first:mt-2", className)}
				{...props}
			>
				<Label className="font-medium text-foreground text-sm">{label}</Label>
				<div className="flex">
					<Group className="w-full">
						<DateInput
							className="pe-9"
							components={{
								Dropdown: CustomDropdown,
							}}
						/>
					</Group>
					<Button className="z-10 flex justify-center items-center -ms-9 -me-px data-focus-visible:border-ring rounded-e-md outline-none data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50 w-9 text-muted-foreground/80 hover:text-foreground transition-[color,box-shadow]">
						<CalendarIcon size={16} />
					</Button>
				</div>
				<Popover
					className="data-[placement=left]:slide-in-from-right-2 data-[placement=top]:slide-in-from-bottom-2 z-50 bg-background data-[placement=bottom]:slide-in-from-top-2 data-[placement=right]:slide-in-from-left-2 shadow-lg border rounded-lg outline-hidden text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95"
					offset={4}
				>
					<Dialog className="p-2 max-h-[inherit] overflow-auto">
						<EnhancedCalendar
							components={{
								Dropdown: CustomDropdown,
							}}
						/>
					</Dialog>
				</Popover>
			</DatePickerRac>
		);
	}

	// Render date range picker
	return (
		<DateRangePickerRac
			defaultValue={defaultRange}
			onChange={onChange}
			className={cn("*:not-first:mt-2", className)}
			{...props}
		>
			<Label className="font-medium text-foreground text-sm">{label}</Label>
			<div className="flex">
				<Group className={cn(dateInputStyle, "pe-9")}>
					<DateInput
						slot="start"
						unstyled
						components={{
							Dropdown: CustomDropdown,
						}}
					/>
					<span aria-hidden="true" className="px-2 text-muted-foreground/70">
						-
					</span>
					<DateInput
						slot="end"
						unstyled
						components={{
							Dropdown: CustomDropdown,
						}}
					/>
				</Group>
				<Button className="z-10 flex justify-center items-center -ms-9 -me-px data-focus-visible:border-ring rounded-e-md outline-none data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50 w-9 text-muted-foreground/80 hover:text-foreground transition-[color,box-shadow]">
					<CalendarIcon size={16} />
				</Button>
			</div>
			<Popover
				className="data-[placement=left]:slide-in-from-right-2 data-[placement=top]:slide-in-from-bottom-2 z-50 bg-background data-[placement=bottom]:slide-in-from-top-2 data-[placement=right]:slide-in-from-left-2 shadow-lg border rounded-md outline-hidden text-popover-foreground data-entering:animate-in data-exiting:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95"
				offset={4}
			>
				<Dialog className="p-2 max-h-[inherit] overflow-auto">
					<EnhancedRangeCalendar
						components={{
							Dropdown: CustomDropdown,
						}}
					/>
				</Dialog>
			</Popover>
		</DateRangePickerRac>
	);
}
