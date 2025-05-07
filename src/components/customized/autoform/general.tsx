"use client";

import { AutoForm } from "@/components/extensions/autoform";
import { ZodProvider, fieldConfig } from "@autoform/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	age: z.coerce.number().min(0, "Age must be a positive number"),
	birthday: z.coerce.date(),
	friends: z
		.array(
			z.object({
				name: z.string().min(1, "Name is required"),
				age: z.coerce.number().min(0, "Age must be a positive number"),
			}),
		)
		// .superRefine(
		// 	fieldConfig({
		// 		customData: {
		// 			enableAdd: false,
		// 		},
		// 	}),
		// )  //! This is to disable the add button
		.optional(),
	isActive: z.boolean().optional(),
	user: z.object({
		status: z.enum(["active", "inactive", "pending"]),
	}),
	companySize: z.enum(["small", "medium", "large"]).superRefine(
		fieldConfig({
			fieldType: "radio",

			inputProps: {
				className: "flex-row",
			},
		}),
	),
});

const autoFormSchema = new ZodProvider(schema);

export default function General() {
	const form = useForm({
		defaultValues: {
			name: "General",
			description: "General",
			age: 30,
			birthday: new Date(),
			user: {
				status: "",
			},
		},
		resolver: zodResolver(schema),
	});

	return (
		<div>
			<AutoForm
				schema={autoFormSchema}
				onSubmit={(data, form) => {
					console.log("Form submitted:", data);
					form.reset();
				}}
				withSubmit
			/>
		</div>
	);
}
