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

export default function TableColumnView<TData>({
	table,
	showHideColumns = true,
}: DataTableViewOptionsProps<TData>) {
	const columns = table
		.getAllColumns()
		.filter(
			(column) =>
				typeof column.accessorFn !== "undefined" && column.getCanHide(),
		);

	if (columns.length === 0) {
		return null;
	}

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
					{columns.map((column) => {
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
