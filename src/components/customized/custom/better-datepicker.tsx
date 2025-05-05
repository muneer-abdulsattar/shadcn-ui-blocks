"use client";
import {
	BetterDatePicker,
	TimePicker,
} from "@/components/extensions/better-date-picker";
import { useState } from "react";

export default function BetterDatePickerDemo() {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [time, setTime] = useState<any>(null);
	return (
		<div className="gap-3 grid">
			<div>
				<p>Date Picker With Input</p>
				<BetterDatePicker
					onChange={setDate}
					value={date}
					weekStartsOn={0} // week starts on Sunday
					displayFormat={{ hour24: "dd/MM/yyyy" }}
					yearRange={3} // the current year +- 3 years
					showInput
				/>
			</div>
			<div>
				<p>Date Picker</p>
				<BetterDatePicker
					onChange={setDate}
					value={date}
					weekStartsOn={0}
					displayFormat={{ hour12: "PP hh:mm:ss b" }}
					hourCycle={12}
				/>
			</div>
			<div>
				<p>Time Picker</p>
				<TimePicker date={time} onChange={setTime} />
			</div>
			<div>
				<p>Date Picker With Time</p>
				<BetterDatePicker
					onChange={setDate}
					value={date}
					weekStartsOn={0}
					granularity="second"
				/>
			</div>
		</div>
	);
}
