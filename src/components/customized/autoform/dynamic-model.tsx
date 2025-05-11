"use client";
import { AutoForm } from "@/components/extensions/autoform";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import type { AutoFormFieldProps } from "@autoform/react";
import { ZodProvider, fieldConfig } from "@autoform/zod";
import { X } from "lucide-react";
import { useState } from "react";
import { useController } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	age: z.coerce
		.number()
		.min(1, "Age is required")
		.max(120, "Age must be less than 120"),
	date: z.coerce.date().optional(),
	select: z.enum(["option1", "option2", "option3"]).optional(),
	customSelect: z.string().superRefine(
		fieldConfig({
			fieldType: "custom",
		}),
	),
});

export default function DynamicModelDemo() {
	return (
		<div>
			<DynamicModel
				endpoint="/api/dynamic-model"
				schema={schema}
				title="Dynamic Model"
				asChild
			>
				<Button variant="outline">Open Dynamic Model</Button>
			</DynamicModel>
		</div>
	);
}

type singleOption = { label: string; value: string };

export type SchemaData =
	| {
			type?: "text" | "number" | "date" | "select" | "radio";
			name: string;
			placeholder?: string;
	  }
	| {
			type: "select" | "radio";
			name: string;
			placeholder?: string;
			options: singleOption[];
	  };

interface IDynamicModelProps {
	children: React.ReactNode;
	endpoint: string;
	data?: any;
	schema: any;
	title?: string;
	asChild?: boolean;
}

function DynamicModel({
	children,
	endpoint,
	data,
	schema,
	title,
	asChild = false,
}: IDynamicModelProps) {
	const name = title || endpoint.replace("/", "");

	const schemaProvider = new ZodProvider(schema);

	const [openDynamicModel, setOpenDynamicModel] = useState(false);

	const onSubmit = async (fd: z.infer<typeof schema>, form) => {
		const formData = fd;
		try {
			if (data) {
				// Update request function
				// await axios.put(`${endpoint}/${data.id}`, formData);
				console.log("Update request", formData);
			}

			if (!data) {
				// Create request function
				// await axios.post(endpoint, formData);
				console.log("Create request", formData);
			}

			// Invalidate queries if using react-query
			// queryClient.invalidateQueries({
			// 	queryKey: [endpoint],
			// });
			setOpenDynamicModel(false);
		} catch (e: any) {
			if (typeof e.error === "object") {
				for (const key in e.error) {
					form.setError(key as any, {
						type: "server",
						message: e.error[key][0],
					});
				}
			}
		}
	};

	return (
		<>
			<Sheet open={openDynamicModel} onOpenChange={setOpenDynamicModel}>
				<SheetTrigger asChild={asChild}>{children}</SheetTrigger>
				<SheetContent className="[&>button]:hidden flex flex-col gap-2 m-1 p-0 rounded-2xl h-[calc(100vh-0.5rem)]">
					<SheetHeader className="hidden">
						<SheetTitle />
						<SheetDescription />
					</SheetHeader>
					<div className="flex justify-between items-center px-6 pt-3">
						<p className="font-bold text-xl">
							{data ? "Edit" : "Create"} {name}
						</p>
						<Button size="icon" variant="outline">
							<X className="w-4 h-4" />
						</Button>
					</div>
					<Separator />
					<ScrollArea className="relative flex-1">
						<div className="px-5">
							<AutoForm
								formComponents={{
									custom: ({
										field,
										label,
										inputProps,
										control,
									}: AutoFormFieldProps) => {
										const {
											field: { onChange, value },
											fieldState: { error },
										} = useController({
											name: inputProps.name,
											control,
											defaultValue: field.default,
											rules: {
												required: inputProps.required,
											},
										});
										return (
											<Select value={value} onValueChange={onChange}>
												<SelectTrigger>
													<SelectValue placeholder={label} />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectItem value="option1">test</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										);
									},
								}}
								schema={schemaProvider}
								onSubmit={(data, form) => {
									onSubmit(data, form);
								}}
								values={data}
							>
								<div className="bottom-0 z-50 absolute flex bg-background p-5 w-full">
									<Button variant="outline">Cancel</Button>
									<Button type="submit" className="mx-2 w-full">
										{data ? "Update" : "Create"} {name}
									</Button>
								</div>
							</AutoForm>
						</div>
						<div className="py-12" />
					</ScrollArea>
				</SheetContent>
			</Sheet>
		</>
	);
}
