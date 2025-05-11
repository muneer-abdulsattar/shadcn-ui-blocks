import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings2 } from "lucide-react";

interface DataTableViewOptionsProps<TData> {
	table: Table<TData>;

	showHideColumns?: boolean;
}

export default function DataTableViewOptions<TData>({
	table,

	showHideColumns = true,
}: DataTableViewOptionsProps<TData>) {
	const selectedRows = table
		.getSelectedRowModel()
		?.flatRows?.map((row) => row.original);

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					{showHideColumns ? (
						<Button
							variant="outline"
							size="sm"
							className="hidden lg:flex ml-auto h-8"
						>
							<Settings2 className="mr-2 w-4 h-4" />
							View
						</Button>
					) : null}
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-[150px]">
					<DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{table
						.getAllColumns()
						.filter(
							(column) =>
								typeof column.accessorFn !== "undefined" && column.getCanHide(),
						)
						.map((column) => {
							return (
								<DropdownMenuCheckboxItem
									key={column.id}
									className="capitalize"
									checked={column.getIsVisible()}
									onCheckedChange={(value) => column.toggleVisibility(!!value)}
								>
									{column.id}
								</DropdownMenuCheckboxItem>
							);
						})}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
