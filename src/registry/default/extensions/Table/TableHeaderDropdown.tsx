import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { Column } from "@tanstack/react-table";
import {
	ArrowDown,
	ArrowUp,
	Ban,
	ChevronsUpDown,
	EyeOff,
	X,
} from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";
import type React from "react";

// import { SortKey, sortValueKey } from "@/variables/tableVars";

const sortValueKey = "sortValue";
const SortKey = "sortKey";

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

	const [filterValue, setFilterValue] = useQueryState(
		column.id,
		parseAsString.withDefault("").withOptions({
			throttleMs: 500,
			clearOnDefault: true,
		}),
	);

	if (!column.getCanSort() && !column.getCanFilter() && !column.getCanHide()) {
		return <div className={cn(className)}>{title}</div>;
	}

	return (
		<div className={cn("flex min-w-0 items-center space-x-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={filterValue ? "secondary" : "ghost"}
						size="sm"
						className="data-[state=open]:bg-accent -mx-0 px-3 h-8"
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
							column.getCanSort() && <ChevronsUpDown className="ml-2 w-4 h-4" />
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent align="start" className="p-1 w-[180px]">
					{column.getCanSort() && (
						<>
							<Button
								variant="ghost"
								className="justify-start w-full"
								onClick={() => {
									setSortKey(column.id);
									setSortValue("asc");
								}}
							>
								<ArrowUp className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
								Asc
							</Button>
							<Button
								variant="ghost"
								className="justify-start w-full"
								onClick={() => {
									setSortKey(column.id);
									setSortValue("desc");
								}}
							>
								<ArrowDown className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
								Desc
							</Button>
						</>
					)}
					{sortValue ? (
						<Button
							variant="ghost"
							className="justify-start w-full"
							onClick={() => {
								setSortKey(null);
								setSortValue(null);
							}}
						>
							<Ban className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
							None
						</Button>
					) : null}

					{column.getCanHide() && (
						<>
							{column.getCanSort() && <DropdownMenuSeparator />}
							<Button
								variant="ghost"
								className="justify-start w-full"
								onClick={() => column.toggleVisibility(false)}
							>
								<EyeOff className="mr-2 w-3.5 h-3.5 text-muted-foreground/70" />
								Hide
							</Button>
							{column.columnDef.enableColumnFilter && <DropdownMenuSeparator />}
						</>
					)}
					{column.columnDef.enableColumnFilter && (
						<TableHeaderDropdownFilter column={column} />
					)}
				</PopoverContent>
			</Popover>
		</div>
	);
}

function TableHeaderDropdownFilter<TData, TValue>({
	column,
}: {
	column: Column<TData, TValue>;
}) {
	const {
		placeholder = `Filter ${column.id}`,
		inputType = "text",
		input,
		options = [],
		className = [],
	} = (column.columnDef.meta || {}) as {
		placeholder?: string;
		inputType?: "text" | "number" | "select";
		input?: (
			value: string,
			onChange: (value: string) => void,
		) => React.ReactNode;
		options?:
			| {
					label: string;
					value: string;
			  }[]
			| undefined;
		className?: string;
	};

	const [filterValue, setFilterValue] = useQueryState(
		column.id,
		parseAsString.withDefault("").withOptions({
			throttleMs: 500,
			clearOnDefault: true,
		}),
	);

	return (
		<div className="flex gap-1">
			{input ? (
				input(filterValue, setFilterValue)
			) : inputType === "select" ? (
				<Select value={filterValue} onValueChange={setFilterValue}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder={placeholder ?? `Select ${column.id}`} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{options?.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			) : (
				<Input
					value={filterValue || ""}
					onChange={(e) => {
						setFilterValue(e.target.value);
					}}
					type={inputType}
					placeholder={placeholder ?? `Filter ${column.id}`}
					className={cn("px-2 py-1", className)}
				/>
			)}
			<Button
				size="icon"
				variant="outline"
				onClick={() => setFilterValue(null)}
			>
				<X />
			</Button>
		</div>
	);
}
