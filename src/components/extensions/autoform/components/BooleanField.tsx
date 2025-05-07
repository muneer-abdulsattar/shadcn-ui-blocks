import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AutoFormFieldProps } from "@autoform/react";
import React from "react";

export const BooleanField: React.FC<AutoFormFieldProps> = ({
	field,
	label,
	id,
	inputProps,
	value,
}) => (
	<div className={cn("flex items-center space-x-2", inputProps.className)}>
		<Checkbox
			id={id}
			onCheckedChange={(checked) => {
				// react-hook-form expects an event object
				const event = {
					target: {
						name: field.key,
						value: checked,
					},
				};
				inputProps.onChange(event);
			}}
			checked={value}
		/>
		<Label htmlFor={id}>
			{label}
			{field.required && <span className="text-destructive"> *</span>}
		</Label>
	</div>
);
