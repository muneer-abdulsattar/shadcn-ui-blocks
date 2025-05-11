"use client";
import { AdvancedDataTable } from "@/components/data-table";
import { useDataTable } from "@/hooks/use-data-table";
import type { Column, ColumnDef } from "@tanstack/react-table";
import { TextIcon } from "lucide-react";

const data = [
	{
		name: "ahmed",
		age: 22,
	},
];

const columns: ColumnDef<(typeof data)[0]>[] = [
	{
		accessorKey: "name",
		header: ({ column }: { column: Column<Project, unknown> }) => (
			<DataTableColumnHeader column={column} title="Title" />
		),
		meta: {
			label: "Title",
			placeholder: "Search titles...",
			variant: "text",
			icon: TextIcon,
		},
		enableColumnFilter: true,
	},
	{
		accessorKey: "age",
		cell: ({ row }) => <span>{row.original.age}</span>,
	},
];

export default function TableDemo() {
	const { table } = useDataTable({
		data,
		columns,
		pageCount: 1,
		initialState: {
			columnPinning: { right: ["actions"] },
		},
	});

	return (
		<div className="w-full">
			<AdvancedDataTable table={table} />
		</div>
	);
}
