import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { AutoFormFieldProps } from "@autoform/react";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { useController } from "react-hook-form";

export const DateField: React.FC<AutoFormFieldProps> = ({
	inputProps,
	field,

	control,
}) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name: inputProps.name,
		control,
		defaultValue: field.default,
		rules: {
			required: inputProps.required,
		},
	});

	const [openPopover, setOpenPopover] = React.useState(false);

	return (
		<>
			<Popover open={openPopover} onOpenChange={setOpenPopover}>
				<PopoverTrigger asChild>
					<Button
						type="button"
						variant={"outline"}
						className={cn(
							"w-full pl-3 text-left font-normal relative",
							!value && "text-muted-foreground",
							error && "border-destructive",
							inputProps.className,
						)}
					>
						{value ? (
							format?.(value, "dd/MM/yyyy")
						) : (
							<span>{inputProps.placeholder || "Select a date"}</span>
						)}
						<CalendarIcon className={cn("opacity-50 ml-auto w-4 h-4")} />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0 w-auto" align="start">
					<Calendar
						mode="single"
						selected={value}
						onSelect={(value) => {
							onChange(value?.toString());
							setOpenPopover(false);
						}}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</>
	);
};
