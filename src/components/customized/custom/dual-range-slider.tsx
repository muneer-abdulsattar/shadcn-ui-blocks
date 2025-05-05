"use client";

import { DualRangeSlider } from "@/components/extensions/dual-range-slider";
import { useState } from "react";

export default function DualRangeSliderDemo() {
	const [values, setValues] = useState([0, 100]);

	return (
		<div className="gap-3 grid w-full">
			<DualRangeSlider
				label={(value) => `${value}%`}
				value={values}
				onValueChange={setValues}
				min={0}
				max={100}
				step={1}
			/>
			<DualRangeSlider
				label={(value) => `${value}M`}
				value={values}
				onValueChange={setValues}
				min={0}
				max={100}
				step={1}
				labelPosition="bottom"
			/>
		</div>
	);
}
