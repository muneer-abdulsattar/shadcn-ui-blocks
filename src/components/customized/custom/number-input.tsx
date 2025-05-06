"use client";

import NumberInput from "@/components/extensions/number-input";
import React from "react";

export default function NumberInputDemo() {
	const [value, setValue] = React.useState<number | undefined>(1250.3455);

	return (
		<div className="flex flex-wrap gap-3">
			<NumberInput value={value} onValueChange={setValue} />
			<NumberInput
				value={value}
				onValueChange={setValue}
				suffix=" USD"
				prefix="$ "
			/>
			<NumberInput value={value} onValueChange={setValue} max={5000} min={10} />

			<NumberInput
				value={value}
				onValueChange={setValue}
				thousandSeparator=","
			/>
			<NumberInput value={value} onValueChange={setValue} decimalScale={2} />
			<NumberInput
				value={value}
				onValueChange={setValue}
				enableArrowButtons
				stepper={20}
			/>
		</div>
	);
}
