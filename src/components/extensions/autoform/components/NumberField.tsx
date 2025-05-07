import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AutoFormFieldProps } from "@autoform/react";
import React from "react";

export const NumberField: React.FC<AutoFormFieldProps> = ({
	inputProps,
	error,
	id,
}) => (
	<>
		<Input
			id={id}
			type="number"
			{...inputProps}
			className={cn(error && "border-destructive", inputProps.className)}
			key={id} // Add key prop to avoid warning
		/>
	</>
);
