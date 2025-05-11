import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export default function BetterDropDown({
	children,
	asChild = false,
	items = [],
}: {
	children: React.ReactNode;
	asChild?: boolean;
	items?: (
		| {
				label: string;
				onClick?: () => void;
				shortcut?: string;
		  }
		| React.ReactNode
	)[];
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				{items?.length ? (
					<>
						{items.map((item, index) => {
							if (React.isValidElement(item)) {
								return React.cloneElement(item, {
									key: `dropdown-item-${index}`,
								});
							}

							// Type guard to check if the item has a label property
							if (
								typeof item === "object" &&
								item !== null &&
								"label" in item
							) {
								return (
									<DropdownMenuItem
										key={`dropdown-item-${index}`}
										onClick={item.onClick}
									>
										{item.label}
										{item.shortcut && (
											<DropdownMenuShortcut>
												{item.shortcut}
											</DropdownMenuShortcut>
										)}
									</DropdownMenuItem>
								);
							}

							return null;
						})}
					</>
				) : null}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
