"use client";
import { ControlledFieldWrapper } from "@/components/extensions/form/controller-field-wrapper";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

export default function WrapperDemo() {
	const form = useForm({
		defaultValues: {
			name: "",
		},
	});

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit((data) => console.log(data))}>
					<ControlledFieldWrapper
						name="name"
						label="Name"
						description="Enter your name"
						inline
					>
						<Input placeholder="Name" />
					</ControlledFieldWrapper>
					<ControlledFieldWrapper
						name="name"
						label="Name"
						description="Enter your name"
					>
						{({ value, onChange }) => (
							<Input value={value} onChange={onChange} />
						)}
					</ControlledFieldWrapper>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
