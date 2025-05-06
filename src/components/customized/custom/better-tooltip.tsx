import BetterToolTip from "@/components/extensions/better-tooltip";
import { Button } from "@/components/ui/button";

export default function BetterToolTipDemo() {
	return (
		<div className="flex gap-3">
			<BetterToolTip value="hello world" asChild side="right">
				<Button>Hover Me</Button>
			</BetterToolTip>
			<BetterToolTip value="hello world" asChild side="bottom">
				<Button>Hover Me</Button>
			</BetterToolTip>
			<BetterToolTip value="hello world" asChild side="left">
				<Button>Hover Me</Button>
			</BetterToolTip>
			<BetterToolTip value="hello world">
				<p>test</p>
			</BetterToolTip>
		</div>
	);
}
