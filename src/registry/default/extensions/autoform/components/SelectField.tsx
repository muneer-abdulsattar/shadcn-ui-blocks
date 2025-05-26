import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { AutoFormFieldProps } from "@autoform/react";
import React, { useEffect } from "react";
import { useController } from "react-hook-form";

export const SelectField: React.FC<AutoFormFieldProps> = ({
	field,
	inputProps,

	id,
	control,
}) => {
	const [key, setKey] = React.useState(id);
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

	// This to clear the selected value when the field is reset
	useEffect(() => {
		if (!value) {
			setKey(new Date().toISOString());
		}
	}, [value]);

	return (
		<>
			<Select
				{...inputProps}
				// set the value on change
				onValueChange={(value) => {
					onChange(value);
				}}
				// set the default value if there's default
				value={value}
				//! fix error where if the field is required and none selected it never show error
				required={false}
				key={key}
			>
				<SelectTrigger
					id={id}
					type="button"
					className={cn(error && "border-destructive", inputProps.className)}
				>
					<SelectValue placeholder="Select an option" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{(field.options || []).map(([key, label]) => (
							<SelectItem key={`${key}-${id}`} value={key}>
								{label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
};
