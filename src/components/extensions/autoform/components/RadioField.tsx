import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { AutoFormFieldProps } from "@autoform/react";
import React, { useEffect } from "react";
import { useController } from "react-hook-form";

export const RadioField: React.FC<AutoFormFieldProps> = ({
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
			<RadioGroup
				{...inputProps}
				onValueChange={onChange}
				value={value}
				className={cn(
					"flex flex-col space-y-1",
					error && "text-destructive",
					inputProps.className,
				)}
				required={false}
				key={key}
			>
				{(field.options || []).map(([key, label]) => (
					<FormItem key={key} className="flex items-center space-x-3 space-y-0">
						<FormControl>
							<RadioGroupItem value={key} />
						</FormControl>
						<FormLabel className="font-normal">{label}</FormLabel>
					</FormItem>
				))}
			</RadioGroup>
		</>
	);
};
