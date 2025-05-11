import type { Row } from "@tanstack/react-table";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import ConfirmDialog from "@/components/shared/ConfirmDialog";
import { Link } from "@tanstack/react-router";
import {
	ChevronDownIcon,
	ChevronUp,
	Cog,
	Ellipsis,
	Trash2,
} from "lucide-react";
import { useState } from "react";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
	children?: React.ReactNode;
	deleteEndpoint?: string;
	editLink?: string;
	editAction?: (arg0: unknown) => void;
	expandable?: boolean;
}

export default function ActionDropdown<TData>({
	row,
	children,
	deleteEndpoint,
	editAction,
	editLink,
	expandable = false,
}: DataTableRowActionsProps<TData>) {
	const [openDelete, setOpenDelete] = useState(false);

	return (
		<>
			<div className="flex items-center gap-2 w-fit">
				{expandable ? (
					row.getIsExpanded() ? (
						<>
							<Button
								variant="ghost"
								className="flex data-[state=open]:bg-muted p-0 w-8 h-8"
							>
								<ChevronUp onClick={() => row.toggleExpanded()} />
							</Button>
						</>
					) : (
						<>
							<Button
								variant="ghost"
								className="flex data-[state=closed]:bg-muted p-0 w-8 h-8"
							>
								<ChevronDownIcon onClick={() => row.toggleExpanded()} />
							</Button>
						</>
					)
				) : null}

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="flex data-[state=open]:bg-muted p-0 w-8 h-8"
						>
							<Ellipsis className="w-4 h-4" />
							<span className="sr-only">Open menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[160px]">
						{editLink && (
							<Link to={editLink}>
								<DropdownMenuItem>
									Edit
									<DropdownMenuShortcut>
										<Cog size={15} />
									</DropdownMenuShortcut>
								</DropdownMenuItem>
							</Link>
						)}

						{editAction && (
							<DropdownMenuItem onClick={() => editAction(row)}>
								Edit
								<DropdownMenuShortcut>
									<Cog size={15} />
								</DropdownMenuShortcut>
							</DropdownMenuItem>
						)}

						{children}

						{deleteEndpoint && (
							<>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => setOpenDelete(true)}>
									Delete
									<DropdownMenuShortcut>
										<Trash2 size={15} />
									</DropdownMenuShortcut>
								</DropdownMenuItem>
							</>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<ConfirmDialog
				open={openDelete}
				setOpen={setOpenDelete}
				onConfirm={() => console.log("send delete request to", deleteEndpoint)}
			/>
		</>
	);
}
