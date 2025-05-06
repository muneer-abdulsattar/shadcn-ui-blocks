"use client";
import { DateRangePicker } from "@/components/extensions/date-range-picker";
import { DateInput } from "@/components/extensions/date-range-picker/date-input";
import { useState } from "react";

export default function DateRangePickerDemo() {
	const [value, setValue] = useState(new Date());

	const [dateRange, setDateRange] = useState<{
		from: Date;
		to: Date | undefined;
	}>({
		from: new Date(),
		to: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
	});

	return (
		<div className="gap-3 grid">
			<DateRangePicker
				onUpdate={({ range }) => setDateRange(range)}
				initialDateFrom={dateRange.from}
				initialDateTo={dateRange.to}
			/>

			<DateInput value={value} onChange={setValue} />
		</div>
	);
}
