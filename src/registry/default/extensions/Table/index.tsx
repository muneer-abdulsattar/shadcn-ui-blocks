"use client";
import type { Row } from "@tanstack/react-table";
import {
	type VisibilityState,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import * as React from "react";

import {
	Table as CNTable,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import TableHeaderDropdown from "@/components/extensions/Table/TableHeaderDropdown";
import type { ColumnDef, Table as TTable } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data?: TData[] | null;
	isLoading?: boolean;
	ExpandableChildren?: (props: {
		row: Row<TData>;
		colSpan: number;
		className: string;
	}) => React.ReactNode;
	className?: string;
	children?: (Table: TTable<TData>) => React.ReactNode;
}

export default function Table<TData, TValue>({
	columns,
	data,
	isLoading,
	ExpandableChildren,
	className,
	children,
}: DataTableProps<TData, TValue>) {
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});

	const table = useReactTable({
		data: data || [],
		// @ts-ignore
		columns: columns.map((column) => ({
			enableSorting: false,
			enableHiding: false,
			enableColumnFilter: false,
			header: ({ column }) => (
				<TableHeaderDropdown column={column} title={column.id} />
			),
			...column,
		})),
		state: {
			columnVisibility,
		},

		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
	});

	React.useEffect(() => {
		// Load column visibility from localStorage on initial render
		const savedVisibility = localStorage.getItem(
			`table-visibility-${columns[0]?.id || "default"}`,
		);
		if (savedVisibility) {
			try {
				const parsedVisibility = JSON.parse(savedVisibility);
				setColumnVisibility(parsedVisibility);
			} catch (error) {
				console.error("Failed to parse saved column visibility", error);
			}
		}
	}, []);

	// Save column visibility to localStorage when it changes
	React.useEffect(() => {
		if (Object.keys(columnVisibility).length) {
			localStorage.setItem(
				`table-visibility-${columns[0]?.id || "default"}`,
				JSON.stringify(columnVisibility),
			);
		}
	}, [columnVisibility, columns]);

	return (
		<div className="space-y-1">
			{children?.(table)}
			<div className="flex">
				<ScrollArea className={cn("flex-1 w-1", className)}>
					<>
						<CNTable className="relative border rounded-lg">
							<TableHeader>
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow key={headerGroup.id}>
										{headerGroup.headers.map((header) => {
											return (
												<TableHead
													key={header.id}
													colSpan={header.colSpan}
													style={{
														width: `${header.getSize()}px`,
													}}
													className="font-normal text-primary text-sm"
												>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext(),
															)}
												</TableHead>
											);
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{isLoading ? (
									<>
										{Array.from({ length: 10 }).map(() => (
											<TableRow key={Math.random() * 25}>
												<TableCell
													colSpan={columns.length}
													className="dark:odd:bg-gray-900 odd:bg-gray-50"
												>
													<Skeleton className="h-5" />
												</TableCell>
											</TableRow>
										))}
									</>
								) : (
									<>
										{table.getRowModel().rows?.length ? (
											table.getRowModel().rows.map((row) => (
												<React.Fragment key={row.id}>
													<TableRow
														data-state={row.getIsSelected() && "selected"}
													>
														{row.getVisibleCells().map((cell) => (
															<TableCell
																className={`${
																	row.getIsExpanded()
																		? "bg-neutral-50 dark:bg-neutral-900"
																		: ""
																}
															${cell.column.getIsPinned() ? "sticky z-50 right-0" : ""}
															`}
																key={cell.id}
															>
																{flexRender(
																	cell.column.columnDef.cell,
																	cell.getContext(),
																)}
															</TableCell>
														))}
													</TableRow>
													{row.getIsExpanded() && ExpandableChildren ? (
														<>
															{ExpandableChildren({
																row,
																colSpan: columns.length,
																className:
																	"bg-neutral-50 dark:bg-neutral-900 pl-24",
															})}
														</>
													) : null}
												</React.Fragment>
											))
										) : (
											<TableRow>
												<TableCell
													colSpan={columns.length}
													className="h-24 text-center"
												>
													No results.
												</TableCell>
											</TableRow>
										)}
									</>
								)}
							</TableBody>
						</CNTable>

						<ScrollBar orientation="horizontal" className="w-full" />
					</>
				</ScrollArea>
			</div>
		</div>
	);
}
