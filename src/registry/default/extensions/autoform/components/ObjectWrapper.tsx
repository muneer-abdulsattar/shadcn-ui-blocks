import { ObjectWrapperProps } from "@autoform/react";
import React from "react";

export const ObjectWrapper: React.FC<ObjectWrapperProps> = ({
	label,
	children,
}) => {
	return (
		<div className="space-y-4">
			<h3 className="font-bold text-lg">{label}</h3>
			{children}
		</div>
	);
};
