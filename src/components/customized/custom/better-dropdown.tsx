"use client";
import BetterDropDown from "@/components/extensions/better-dropdown";
import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

export default function BetterDropDownDemo() {
	return (
		<div>
			<BetterDropDown
				asChild
				items={[
					{
						label: "Edit",
						onClick: () => console.log("Edit clicked"),
						shortcut: "⌘E",
					},
					<DropdownMenuSeparator key="separator-1" />,
					{
						label: "AA",
						onClick: () => console.log("AAA"),
						shortcut: "⌘E",
					},
				]}
			>
				<Button size="icon" variant="outline">
					<EllipsisVertical />
				</Button>
			</BetterDropDown>
		</div>
	);
}
