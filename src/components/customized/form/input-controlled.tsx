"use client";
import {
	CheckboxControlled,
	CheckboxGroupControlled,
	DatePickerControlled,
	InputControlled,
	RadioGroupControlled,
	RadioSwitchControlled,
	SelectControlled,
	TextAreaControlled,
} from "@/components/extensions/form/controlled-inputs";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SelectItem, SelectLabel } from "@/components/ui/select";
import { Home } from "lucide-react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

export default function InputControllerDemo() {
	const form = useForm({
		defaultValues: {
			name: "",
			terms: false,
			sections: [],
			date: null as Date | null,
		},
	});

	useEffect(() => {
		setTimeout(() => {
			form.setError("name", { type: "manual", message: "Name is required" });
		}, 3000);
	}, []);

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit((data) => console.log(data))}
					className="gap-2 grid"
				>
					<InputControlled
						name="name"
						label="Input"
						inputProps={{ placeholder: "Name", type: "text" }}
					/>

					<SelectControlled
						name="name"
						label="Select"
						inputProps={{
							placeholder: "Select an option",
							options: [
								<SelectLabel key="header">Custom Header</SelectLabel>,
								<SelectItem
									className="gap-1"
									key="custom option"
									value="custom option"
								>
									<Home className="inline mr-2" size={16} />
									Custom Option
								</SelectItem>,
								{ label: "Option 1", value: "option1", disabled: true },
								{ label: "Option 2", value: "option2" },
								{ label: "Option 3", value: "option3" },
							],
						}}
					/>

					<CheckboxControlled name="terms" label="Checkbox" />
					<CheckboxControlled
						name="terms"
						label="Checkbox"
						description="This is a checkbox with a description"
						inputProps={{
							bordered: true,
						}}
					/>

					<CheckboxGroupControlled
						name="sections"
						label="Checkbox Group"
						description="This is a checkbox group with a description"
						inputProps={{
							options: [
								{ label: "Option 1", value: "option1", disabled: true },
								{ label: "Option 2", value: "option2" },
								{ label: "Option 3", value: "option3" },
							],
						}}
					/>
					<CheckboxGroupControlled
						name="sections"
						label="Checkbox Group"
						description="This is a checkbox group with a description"
						inline
						inputProps={{
							options: [
								{ label: "Option 1", value: "option1", disabled: true },
								{ label: "Option 2", value: "option2" },
								{ label: "Option 3", value: "option3" },
							],
						}}
					/>

					<DatePickerControlled
						name="name"
						label="Date Picker"
						inputProps={{ placeholder: "Select a date" }}
					/>

					<RadioGroupControlled
						name="radioGroup"
						label="Radio Group"
						inputProps={{
							options: [
								{ label: "Option 1", value: "option1", disabled: true },
								{ label: "Option 2", value: "option2" },
								{ label: "Option 3", value: "option3" },
							],
						}}
					/>

					<RadioSwitchControlled
						name="name"
						label="Radio Switch"
						inputProps={{}}
					/>

					<TextAreaControlled name="name" label="Text Area" />

					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
