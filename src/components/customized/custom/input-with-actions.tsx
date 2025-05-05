"use client";

import InputWithActions from "@/components/extensions/input-with-actions";
import { Upload } from "lucide-react";
import { useState } from "react";

const options = [
	{ label: "options" },
	{ value: "option1", label: "Option 1" },
	{ value: "option2", label: "Option 2" },
];

export default function InputWithActionsDemo() {
	const [selectValue, setSelectValue] = useState("option1");
	return (
		<div className="gap-3 grid">
			<div>
				<p>Input With Select</p>
				<div className="gap-2 grid">
					<InputWithActions
						StartSelect={{
							value: selectValue,
							onValueChange: setSelectValue,
							options,
							placeholder: "Select an option",
						}}
					/>
					<InputWithActions
						EndSelect={{
							value: selectValue,
							onValueChange: setSelectValue,
							options,
							placeholder: "Select an option",
						}}
					/>
				</div>
			</div>
			<div>
				<p>Input With Buttons</p>
				<div className="gap-2 grid">
					<InputWithActions
						EndButton={{
							variant: "outline",
							size: "icon",
							children: <Upload className="mx-3" />,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
