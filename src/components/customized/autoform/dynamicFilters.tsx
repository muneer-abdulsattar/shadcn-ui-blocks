"use client";
import { AutoForm } from "@/components/extensions/autoform";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ZodProvider } from "@autoform/zod";
import { SlidersHorizontal, Upload, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { parseAsString, useQueryStates } from "nuqs";
import React, { useMemo, useState } from "react";
import { z } from "zod";

const schema = z.object({
	name: z.string().optional(),
	description: z.string().optional(),
	age: z.coerce.number().optional(),
	birthday: z.coerce.date().optional(),
	isActive: z.boolean().optional(),
	companySize: z.enum(["small", "medium", "large"]).optional(),
});

const DropDownMenuSchema = z.object({
	Merchant: z.object({
		merchantName: z.string().optional(),
		merchantId: z.string().optional(),
	}),
});

export default function DynamicFiltersDemo() {
	return (
		<div className="gap-3 grid w-full">
			<DropdownDynamicFilters
				title="Dropdown Dynamic Filters"
				filterSchema={schema}
			>
				<Button size="icon">
					<Upload />
				</Button>
			</DropdownDynamicFilters>

			<Separator />
			<div>
				<p>Fields On Change:</p>
				<RenderFieldsDynamicFilters filterSchema={schema} />
			</div>
			<Separator />

			<DropDownMenuDynamicFilters schema={DropDownMenuSchema} />
		</div>
	);
}

const DropdownDynamicFilters = ({
	title,
	children,
	filterSchema,
}: {
	title?: string;
	children?: React.ReactNode;
	filterSchema?: z.ZodObject<any>;
}) => {
	const schemaShape = filterSchema ? filterSchema._def.shape() : {};
	const initialQueryState = Object.keys(schemaShape).reduce<
		Record<string, ReturnType<typeof parseAsString.withDefault>>
	>((acc, key) => {
		acc[key] = parseAsString.withDefault("").withOptions({
			clearOnDefault: true,
		});
		return acc;
	}, {});

	const [query, setQuery] = useQueryStates(initialQueryState);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	// @ts-ignore
	const autoFormSchema = new ZodProvider(filterSchema);

	return (
		<div className="shadow-sm mt-3 px-3 py-3 border rounded-md w-full">
			<div className="flex justify-between items-center">
				<div className="text-primary text-xl">{title}</div>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-3">{children}</div>

					<div className="flex items-center">
						{filterSchema && (
							<div className="flex items-center">
								<Button
									onClick={() => setIsFilterVisible((prev) => !prev)}
									variant={isFilterVisible ? "outline" : "default"}
									size="icon"
								>
									<SlidersHorizontal size={18} />
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isFilterVisible && (
					<motion.div
						initial={{ opacity: 0, height: 0, margin: 0 }}
						animate={{
							opacity: 1,
							height: "auto",
							margin: "1rem 1rem 0 0",
						}}
						exit={{ opacity: 0, height: 0, margin: 0 }}
						key="filters"
					>
						<AutoForm
							values={query}
							formProps={{
								className: "grid grid-cols-3 gap-5 items-center",
							}}
							schema={autoFormSchema}
							onSubmit={(data, form) => {
								setQuery(form.getValues());
							}}
						>
							<div className="flex gap-2">
								<Button
									onClick={() => setQuery(null)}
									type="button"
									variant="destructive"
								>
									Clear
								</Button>
								<Button type="submit" className="">
									Apply
								</Button>
							</div>
						</AutoForm>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const RenderFieldsDynamicFilters = ({
	title,
	children,
	filterSchema,
}: {
	title?: string;
	children?: React.ReactNode;
	filterSchema?: z.ZodObject<any>;
}) => {
	const schemaShape = filterSchema ? filterSchema._def.shape() : {};
	const initialQueryState = Object.keys(schemaShape).reduce<
		Record<string, ReturnType<typeof parseAsString.withDefault>>
	>((acc, key) => {
		acc[key] = parseAsString.withDefault("").withOptions({
			clearOnDefault: true,
		});
		return acc;
	}, {});

	const [query, setQuery] = useQueryStates(initialQueryState);
	const [isFilterVisible, setIsFilterVisible] = React.useState(false);
	// @ts-ignore
	const autoFormSchema = new ZodProvider(filterSchema);

	return (
		<AutoForm
			values={query}
			formProps={{
				className: "flex flex-wrap gap-3 items-center",
			}}
			onFormInit={(form) => {
				form.watch((data) => {
					setQuery(data);
				});
			}}
			schema={autoFormSchema}
		/>
	);
};

// Only For The Dropdown Menu Filters Start
function flattenObject(input) {
	return Object.keys(input).reduce((acc, key) => {
		const value = input[key];
		if (typeof value === "object" && value !== null) {
			// Recursively flatten nested objects
			Object.assign(acc, flattenObject(value));
		} else {
			acc[key] = parseAsString;
		}
		return acc;
	}, {});
}

function rehydrateObject(flatObject, structure) {
	const result = {};

	// Recursively build the object based on the structure
	function assignNestedValues(structure, flatObject, result) {
		Object.keys(structure).forEach((key) => {
			if (typeof structure[key] === "object") {
				// Initialize the nested object if it's not already present
				if (!result[key]) {
					result[key] = {};
				}
				// Recursive call to handle deeper nesting
				assignNestedValues(structure[key], flatObject, result[key]);
			} else {
				// Directly assign values from the flat object
				result[key] = flatObject[key];
			}
		});
	}

	assignNestedValues(structure, flatObject, result);
	return result;
}

function getDefaults<T extends z.ZodTypeAny>(
	schema: z.AnyZodObject | z.ZodEffects<any>,
): z.infer<T> {
	// Check if it's a ZodEffect
	if (schema instanceof z.ZodEffects) {
		// Check if it's a recursive ZodEffect
		if (schema.innerType() instanceof z.ZodEffects)
			return getDefaults(schema.innerType());
		// return schema inner shape as a fresh zodObject
		return getDefaults(z.ZodObject.create(schema.innerType().shape));
	}

	function getDefaultValue(schema: z.ZodTypeAny): unknown {
		if (schema instanceof z.ZodDefault) return schema._def.defaultValue();
		// return an empty array if it is
		if (schema instanceof z.ZodArray) return [];
		// return an empty string if it is
		if (schema instanceof z.ZodString) return "";
		// return an content of object recursivly
		if (schema instanceof z.ZodObject) return getDefaults(schema);

		if (!("innerType" in schema._def)) return undefined;
		return getDefaultValue(schema._def.innerType);
	}

	return Object.fromEntries(
		Object.entries(schema.shape).map(([key, value]) => {
			return [key, getDefaultValue(value)];
		}),
	);
}

interface IDynamicFiltersProps {
	children?: React.ReactNode;
	schema?: any;
}

function DropDownMenuDynamicFilters({
	schema,
	children,
}: IDynamicFiltersProps) {
	const zodSchema = schema ? new ZodProvider(schema?.partial()) : null;
	const defaultFilters = schema ? getDefaults(schema) : {};

	const [openFilters, setOpenFilters] = useState(false);
	const [openAccordions, setOpenAccordions] = useState(
		Object.keys(defaultFilters).map((key) => String(key).toLowerCase()),
	);

	const [filtersQuery, setFiltersQuery] = useQueryStates(
		flattenObject(defaultFilters),
	);

	const activeFilters = useMemo(
		() => Object.values(filtersQuery).filter((value) => value).length,
		[filtersQuery],
	);

	return (
		<div className="p-5 pb-0">
			<div className="flex flex-wrap justify-between items-center gap-2">
				{children}
				<div className="flex gap-4">
					{schema && (
						<Popover modal open={openFilters} onOpenChange={setOpenFilters}>
							<PopoverTrigger asChild>
								<Button
									onClick={() => setOpenFilters((prev) => !prev)}
									variant={openFilters ? "secondary" : "outline"}
								>
									<span className="flex items-center gap-2 text-muted-foreground">
										<SlidersHorizontal />
										Filters
										{activeFilters > 0 && (
											<span className="bg-red-500 rounded-full size-4 text-white text-xs">
												{activeFilters}
											</span>
										)}
									</span>
								</Button>
							</PopoverTrigger>
							<PopoverContent align="end" className="w-80">
								<div>
									<div className="flex justify-between items-center mb-4 p-2 border-b">
										<span className="font-bold text-lg">Filters</span>
										{Object.values(filtersQuery).some((value) => value) && (
											<Button
												variant="link"
												onClick={() => {
													setFiltersQuery(null);
													setOpenFilters(false);
												}}
												className="px-0"
											>
												<X />
												Reset
											</Button>
										)}
									</div>

									<ScrollArea className="relative h-96">
										<Accordion
											type="multiple"
											defaultValue={openAccordions}
											onValueChange={setOpenAccordions}
										>
											{zodSchema && (
												<AutoForm
													schema={zodSchema}
													onSubmit={(data) => {
														const newData = Object.keys(data).reduce(
															(acc, key) => {
																if (
																	typeof data[key] === "object" &&
																	data[key] !== null
																) {
																	Object.assign(acc, data[key]);
																} else {
																	acc[key] = data[key];
																}
																return acc;
															},
															{},
														);

														setFiltersQuery(newData);
													}}
													values={rehydrateObject(filtersQuery, defaultFilters)}
													uiComponents={{
														ObjectWrapper: ({ children, label }) => (
															<>
																<AccordionItem
																	value={String(label).toLocaleLowerCase()}
																	className="border rounded-xl overflow-hidden"
																>
																	<AccordionTrigger className="bg-muted px-3 py-2 !no-underline">
																		{label}
																	</AccordionTrigger>
																	<AccordionContent className="space-y-3 mt-3 px-5">
																		{children}
																	</AccordionContent>
																</AccordionItem>
															</>
														),
													}}
												>
													<div className="bottom-0 z-50 absolute flex justify-end gap-2 col-span-3 bg-background pt-2 w-full">
														<Button
															type="button"
															variant="outline"
															onClick={() => {
																setOpenFilters(false);
															}}
														>
															Cancel
														</Button>
														<Button type="submit" className="px-8">
															Apply Filter
														</Button>
													</div>
												</AutoForm>
											)}
										</Accordion>
										<div className="py-12" />
									</ScrollArea>
								</div>
							</PopoverContent>
						</Popover>
					)}
				</div>
			</div>
		</div>
	);
}
// Only For The Dropdown Menu Filters End
