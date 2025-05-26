import { cn } from "@/lib/utils";

export const NotificationBadge = ({
	children,
	value,
	Position = "top-right",
	color = "destructive",
}: {
	children: React.ReactNode;
	value?: string | number;
	Position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	color?:
		| "destructive"
		| "warning"
		| "info"
		| "success"
		| "primary"
		| "offline";
}) => {
	return (
		<div className="relative">
			{children}
			<span
				className={cn(
					" absolute flex justify-center items-center  px-1 rounded-full  text-xs origin-center text-white ",
					{
						"p-1": !value,

						" min-w-4 ": value,
					},
					{
						"-top-1": Position.includes("top") && !value,
						"-translate-y-1/2 top-0 ": Position.includes("top") && value,
					},
					{
						"-right-1": Position.includes("right") && !value,
						"translate-x-1/2 right-0": Position.includes("right") && value,
					},
					{
						"-bottom-1": Position.includes("bottom") && !value,
						"translate-y-1/2 bottom-0 ": Position.includes("bottom") && value,
					},
					{
						"-left-1": Position.includes("left") && !value,
						"-translate-x-1/2 left-0": Position.includes("left") && value,
					},
					{
						"bg-destructive text-destructive-foreground":
							color === "destructive",
						"bg-yellow-400 dark:bg-yellow-500 ": color === "warning",
						"bg-blue-400 dark:bg-blue-500 ": color === "info",
						"bg-lime-400 dark:bg-lime-500": color === "success",
						"bg-primary text-primary-foreground": color === "primary",
						"bg-background border-2 border-muted-foreground":
							color === "offline",
					},
				)}
			>
				{value}
			</span>
		</div>
	);
};
