import {
	ControlledFieldWrapper,
	type FieldWrapperProps,
} from "@/components/extensions/form/controller-field-wrapper";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input, type InputProps } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { ReactNode } from "react";
import React from "react";

interface ControlledFieldWrapperProps<T>
	extends Omit<FieldWrapperProps, "children"> {
	inputProps?: T;
}

type InputControllerProps = ControlledFieldWrapperProps<InputProps>;

export const InputControlled: React.FC<InputControllerProps> = ({
	inputProps,
	...props
}) => {
	return (
		<ControlledFieldWrapper {...props}>
			{(fieldProps) => (
				<Input
					{...inputProps}
					{...fieldProps}
					className={cn(
						inputProps?.className,
						fieldProps.isError && "border-destructive",
					)}
				/>
			)}
		</ControlledFieldWrapper>
	);
};

type SelectControllerProps = ControlledFieldWrapperProps<{
	placeholder?: string;
	className?: string;
	options: Array<
		| {
				label: string | React.ReactNode;
				value: string;
				disabled?: boolean;
		  }
		| React.ReactNode
	>;
}>;

export const SelectControlled: React.FC<SelectControllerProps> = ({
	inputProps,
	...props
}) => {
	return (
		<ControlledFieldWrapper {...props}>
			{(fieldProps) => (
				<Select value={fieldProps.value} onValueChange={fieldProps.onChange}>
					<FormControl>
						<SelectTrigger
							id={fieldProps.id}
							className={cn(inputProps?.className, {
								"border-destructive": fieldProps.isError,
							})}
						>
							<SelectValue placeholder={inputProps?.placeholder} />
						</SelectTrigger>
					</FormControl>
					<SelectContent>
						<SelectGroup>
							{inputProps?.options?.map((option, index) => {
								if (
									typeof option === "string" ||
									React.isValidElement(option)
								) {
									return React.isValidElement(option)
										? React.cloneElement(option, { key: `option-${index}` })
										: option;
								}

								if (
									typeof option === "object" &&
									option !== null &&
									"label" in option &&
									"value" in option
								) {
									return (
										<SelectItem
											key={`option-${index}`}
											value={option.value}
											disabled={option.disabled}
										>
											{option.label}
										</SelectItem>
									);
								}

								throw new Error(
									`Invalid option type: ${typeof option}. Expected string, ReactNode, or { label: string, value: string, disabled?: boolean }`,
								);
							})}
						</SelectGroup>
					</SelectContent>
				</Select>
			)}
		</ControlledFieldWrapper>
	);
};

type CheckboxControlledProps = ControlledFieldWrapperProps<{
	className?: string;
	bordered?: boolean;
}>;

export const CheckboxControlled = ({
	inputProps,
	...props
}: CheckboxControlledProps) => {
	return (
		<div
			className={cn(" gap-2  ", {
				"border rounded-md p-4": inputProps?.bordered,
			})}
		>
			<ControlledFieldWrapper
				className="flex-row-reverse w-fit"
				inline
				{...props}
			>
				{(fieldProps) => (
					<Checkbox
						id={fieldProps.id}
						checked={fieldProps.value}
						onCheckedChange={fieldProps.onChange}
					/>
				)}
			</ControlledFieldWrapper>
		</div>
	);
};

type CheckboxGroupControlledProps = ControlledFieldWrapperProps<{
	className?: string;
	options: Array<{
		label: string | ReactNode;
		value: string;
		disabled?: boolean;
	}>;
}>;

export const CheckboxGroupControlled: React.FC<
	CheckboxGroupControlledProps
> = ({ inputProps, ...props }) => {
	return (
		<ControlledFieldWrapper {...props} inline={false}>
			{(fieldProps) => (
				<div
					className={cn("flex  flex-col gap-2 mt-2", {
						"flex-row flex-wrap": props.inline,
					})}
				>
					{inputProps?.options?.map((option, index) => (
						<FormItem
							className="space-y-1"
							key={`checkbox-group-${index}-${fieldProps.id}`}
						>
							<div
								className={cn(
									"gap-1 flex items-center space-x-1",

									props.className,
								)}
							>
								<FormControl>
									<Checkbox
										key={`checkbox-${index}`}
										id={`${fieldProps.id}-${index}`}
										checked={fieldProps.value.includes(option.value)}
										onCheckedChange={(checked) => {
											return checked
												? fieldProps.onChange([
														...fieldProps.value,
														option.value,
													])
												: fieldProps.onChange(
														fieldProps.value?.filter(
															(value: any) => value !== option.value,
														),
													);
										}}
										disabled={option.disabled}
									/>
								</FormControl>
								<FormLabel htmlFor={`${fieldProps.id}-${index}`}>
									{option.label}
								</FormLabel>
							</div>
						</FormItem>
					))}
				</div>
			)}
		</ControlledFieldWrapper>
	);
};

type DatePickerControlledProps = ControlledFieldWrapperProps<{
	className?: string;
	placeholder?: string;
}>;

export const DatePickerControlled: React.FC<DatePickerControlledProps> = ({
	inputProps,
	...props
}) => {
	return (
		<ControlledFieldWrapper {...props}>
			{(fieldProps) => (
				<Popover>
					<PopoverTrigger asChild>
						<FormControl>
							<Button
								variant={"outline"}
								className={cn(
									" pl-3 text-left font-normal",
									!fieldProps.value && "text-muted-foreground",
									inputProps?.className,
									fieldProps.isError && "border-destructive",
								)}
							>
								{fieldProps.value ? (
									format(fieldProps.value, "dd/MM/yyyy")
								) : (
									<span>Pick a date</span>
								)}
								<CalendarIcon className="opacity-50 ml-auto w-4 h-4" />
							</Button>
						</FormControl>
					</PopoverTrigger>
					<PopoverContent className="p-0 w-auto" align="start">
						<Calendar
							mode="single"
							selected={fieldProps.value}
							onSelect={fieldProps.onChange}
							disabled={(date) =>
								date > new Date() || date < new Date("1900-01-01")
							}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			)}
		</ControlledFieldWrapper>
	);
};

type RadioGroupControlledProps = ControlledFieldWrapperProps<{
	className?: string;
	options: Array<{
		label: string | ReactNode;
		value: string;
		disabled?: boolean;
	}>;
}>;

export const RadioGroupControlled: React.FC<RadioGroupControlledProps> = ({
	inputProps,
	...props
}) => {
	return (
		<ControlledFieldWrapper {...props} inline={false}>
			{(fieldProps) => (
				<RadioGroup
					onValueChange={fieldProps.onChange}
					defaultValue={fieldProps.value}
					className={cn("flex flex-col space-y-1 mt-2", inputProps?.className)}
				>
					{inputProps?.options?.map((option, index) => (
						<FormItem
							key={`radio-group-${index}-${fieldProps.id}`}
							className="flex items-center space-x-3 space-y-0"
						>
							<FormControl>
								<RadioGroupItem
									disabled={option.disabled}
									value={option.value}
								/>
							</FormControl>
							<FormLabel className="font-normal">{option.label}</FormLabel>
						</FormItem>
					))}
				</RadioGroup>
			)}
		</ControlledFieldWrapper>
	);
};

type RadioSwitchControlledProps = ControlledFieldWrapperProps<{
	className?: string;
	bordered?: boolean;
}>;

export const RadioSwitchControlled = ({
	inputProps,
	...props
}: RadioSwitchControlledProps) => {
	return (
		<div
			className={cn(" gap-2  ", {
				"border rounded-md p-4": inputProps?.bordered,
			})}
		>
			<ControlledFieldWrapper
				className="flex-row-reverse gap-2 w-fit"
				inline
				{...props}
			>
				{(fieldProps) => (
					<Switch
						id={fieldProps.id}
						checked={fieldProps.value}
						onCheckedChange={fieldProps.onChange}
					/>
				)}
			</ControlledFieldWrapper>
		</div>
	);
};

type TextAreaControllerProps = ControlledFieldWrapperProps<
	React.ComponentProps<"textarea">
>;

export const TextAreaControlled: React.FC<TextAreaControllerProps> = ({
	inputProps,
	...props
}) => {
	return (
		<ControlledFieldWrapper {...props}>
			{(fieldProps) => (
				<Textarea
					{...inputProps}
					{...fieldProps}
					className={cn(
						inputProps?.className,
						fieldProps.isError && "border-destructive",
					)}
				/>
			)}
		</ControlledFieldWrapper>
	);
};
