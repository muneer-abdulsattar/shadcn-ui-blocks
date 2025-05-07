import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AutoFormFieldProps } from "@autoform/react";
import React from "react";

export const StringField: React.FC<AutoFormFieldProps> = ({
	inputProps,
	error,
	id,
}) => (
	<Input
		id={id}
		{...inputProps}
		className={cn(error && "border-destructive", inputProps.className)}
		key={id} // Add key prop to avoid warning
	/>
);
