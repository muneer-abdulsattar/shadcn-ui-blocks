import { Label } from "@/components/ui/label";
import { FieldWrapperProps } from "@autoform/react";
import React from "react";

const DISABLED_LABELS = ["boolean", "object", "array"];

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
	label,
	children,
	id,
	field,
	error,
}) => {
	const isDisabled = DISABLED_LABELS.includes(field.type);

	return (
		<div>
			{!isDisabled && (
				<Label htmlFor={id} className="select-none">
					{label}
					{field.required && <span className="text-destructive"> *</span>}
				</Label>
			)}
			{children}
			{field?.fieldConfig?.description && (
				<p className="text-muted-foreground text-sm">
					{field?.fieldConfig.description}
				</p>
			)}
			{error && <p className="text-destructive text-sm">{error}</p>}
		</div>
	);
};
