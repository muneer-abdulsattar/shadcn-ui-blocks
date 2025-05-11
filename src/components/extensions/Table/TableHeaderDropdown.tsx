import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Ban, ChevronsUpDown, EyeOff } from "lucide-react";

import { SortKey, sortValueKey } from "@/variables/tableVars";
import { parseAsString, useQueryState } from "nuqs";

interface TableHeaderDropdownProps<TData, TValue>
	extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>;
	title: string;
}

export default function TableHeaderDropdown<TData, TValue>({
	column,
	title,
	className,
}: TableHeaderDropdownProps<TData, TValue>) {
	const [sortKey, setSortKey] = useQueryState(SortKey, parseAsString);

	const [sortValue, setSortValue] = useQueryState(sortValueKey, parseAsString);

	if (!column.getCanSort()) {
		return <div className={cn(className)}>{title}</div>;
	}

	return (
		<div className={cn("flex min-w-0 items-center space-x-2", className)}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="data-[state=open]:bg-accent -ml-3 h-8"
					>
						<span>{title}</span>
						{sortKey === column.id ? (
							<>
								{sortValue === "asc" ? (
									<ArrowUp className="ml-2 w-4 h-4" />
								) : (
									<ArrowDown className="ml-2 w-4 h-4" />
								)}
							</>
						) : (
							<ChevronsUpDown className="ml-2 w-4 h-4" />
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem
						onClick={() => {
							setSortKey(column.id);
							setSortValue("asc");
						}}
					>
						<ArrowUp className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
						Asc
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() => {
							setSortKey(column.id);
							setSortValue("desc");
						}}
					>
						<ArrowDown className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
						Desc
					</DropdownMenuItem>
					{sortValue ? (
						<DropdownMenuItem
							onClick={() => {
								setSortKey(null);
								setSortValue(null);
							}}
						>
							<Ban className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
							None
						</DropdownMenuItem>
					) : null}

					{column.getCanHide() && (
						<>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
								<EyeOff className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
								Hide
							</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
