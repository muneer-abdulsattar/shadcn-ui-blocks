import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BetterToolTip({
	children,
	asChild = false,
	side = "top",
	delayDuration = 100,
	value,
}: {
	children: React.ReactNode;
	asChild?: boolean;
	side?: "top" | "right" | "bottom" | "left";
	delayDuration?: number;
	value: React.ReactNode;
}) {
	return (
		<TooltipProvider delayDuration={delayDuration}>
			<Tooltip>
				<TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
				<TooltipContent side={side}>{value}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
