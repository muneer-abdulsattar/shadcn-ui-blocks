import {
	FormControl,
	FormDescription,
	FormField,
	FormFieldContext,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import React, { useContext, useId } from "react";
import {
	type ControllerRenderProps,
	type FieldValues,
	useFormContext,
} from "react-hook-form";

export interface FieldWrapperProps {
	name: string;
	className?: string;
	label?: string;
	description?: string;
	children:
		| React.ReactElement<{ id?: string; isError?: boolean }>
		| ((
				fieldProps: ControllerRenderProps<FieldValues, string> & {
					id: string;
					isError?: boolean;
				},
		  ) => React.ReactNode);
	allowAny?: boolean;
	inline?: boolean;
}

export function ControlledFieldWrapper({
	name,
	label,
	className,
	description,
	children,
	allowAny,
	inline = false,
}: FieldWrapperProps) {
	const id = useId();
	// Get the form context from shadcn's Form component
	const fieldContext = useContext(FormFieldContext); // you need to export FormFieldContext from your form component file

	if (!fieldContext) {
		throw new Error("FieldWrapper must be used within a Form component");
	}

	const { control, getFieldState } = useFormContext();

	// Check if the field name is valid in the current form
	try {
		// This will throw an error if the field doesn't exist
		if (!allowAny) getFieldState(name);
	} catch (error) {
		console.error(`Field "${name}" does not exist in the form context`);
	}

	return (
		<FormField
			name={name}
			control={control}
			render={({ field, fieldState }) => {
				const { invalid } = fieldState;

				return (
					<FormItem className="space-y-1">
						<div
							className={cn(
								"gap-1",
								{
									"flex flex-col": !inline,
									"flex items-center space-x-1": inline,
								},
								className,
							)}
						>
							{label && <FormLabel htmlFor={id}>{label}</FormLabel>}
							<FormControl>
								{typeof children === "function"
									? children({
											...field,
											id,
											isError: invalid,
										})
									: React.isValidElement(children)
										? React.cloneElement(children, {
												...field,
												id,
											})
										: children}
							</FormControl>
						</div>
						{description && <FormDescription>{description}</FormDescription>}
						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
}
