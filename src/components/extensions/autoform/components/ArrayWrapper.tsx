import { Button } from "@/components/ui/button";
import { ArrayWrapperProps } from "@autoform/react";
import { PlusIcon } from "lucide-react";
import React from "react";

export const ArrayWrapper: React.FC<ArrayWrapperProps> = ({
	label,
	children,
	onAddItem,
	field,
}) => {
	console.log();
	return (
		<div className="space-y-4">
			<h3 className="font-medium text-lg">{label}</h3>
			{children}
			{field.fieldConfig?.customData?.enableAdd === false ? null : (
				<Button onClick={onAddItem} variant="outline" size="sm" type="button">
					<PlusIcon className="w-4 h-4" />
				</Button>
			)}
		</div>
	);
};
