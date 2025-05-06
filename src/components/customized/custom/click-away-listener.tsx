"use client";
import { ClickAwayListener } from "@/components/extensions/click-away-listener";
import { Button } from "@/components/ui/button";

export default function ClickAwayListenerDemo() {
	return (
		<div>
			<ClickAwayListener onClickAway={() => alert("Clicked away!")}>
				<Button className="focus:ring">Click me</Button>
			</ClickAwayListener>
		</div>
	);
}
