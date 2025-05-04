import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const betterBadgeVariants = cva(
	"inline-flex items-center px-2.5 py-0.5 border rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background font-medium text-xs transition-colors",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary/10 dark:bg-primary/20 text-primary shadow hover:bg-primary/10",
				secondary:
					"border-transparent dark:bg-secondary/20 bg-secondary/10 hover:bg-secondary/10",
				destructive:
					"border-transparent dark:bg-destructive/20 bg-destructive/10 text-destructive shadow hover:bg-destructive/10",
				info: "border-transparent bg-blue-600/10 dark:bg-blue-600/20 text-blue-500 shadow hover:bg-blue-600/10",
				success:
					"bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none",
				warning:
					"bg-yellow-600/10 dark:bg-yellow-600/20 hover:bg-yellow-600/10 text-yellow-500 shadow-none",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

const DisplayIcon = ({
	icon,
	className,
}: {
	icon?:
		| React.ComponentType<{ className?: string }>
		| React.ReactElement
		| string;
	className?: string;
}) => {
	if (!icon) return null;

	// Case 1: String (image URL)
	if (typeof icon === "string") {
		return <img src={icon} alt="icon" className="w-4 h-4" />;
	}

	// Case 2: Already rendered ReactElement
	if (React.isValidElement(icon)) {
		return icon;
	}

	// Case 3: Component type that needs to be rendered
	const Icon = icon;
	return <Icon className={cn("size-4", className)} />;
};

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof betterBadgeVariants> {}

function BetterBadge({
	className,
	variant = "default",
	status,
	border = false,
	StartIcon,
	EndIcon,
	...props
}: BadgeProps & {
	status?: boolean;
	border?: boolean;
	StartIcon?:
		| React.ComponentType<{ className?: string }>
		| React.ReactElement
		| string;
	EndIcon?:
		| React.ComponentType<{ className?: string }>
		| React.ReactElement
		| string;
}) {
	const getStatusColor = () => {
		const colorMap = {
			destructive: "bg-destructive",
			secondary: "bg-foreground",
			info: "bg-blue-500",
			success: "bg-emerald-500",
			warning: "bg-yellow-500",
			default: "bg-primary",
		};

		return colorMap[variant as keyof typeof colorMap] || colorMap.default;
	};

	return (
		<div
			className={cn(
				betterBadgeVariants({ variant }),
				border && "border-current",
				"gap-1.5",
				StartIcon && "pl-1",
				EndIcon && "pr-1",
				className,
				"flex items-center",
			)}
			{...props}
		>
			{status && (
				<span className={cn("size-1.5 rounded-full", getStatusColor())} />
			)}
			<DisplayIcon icon={StartIcon} />
			{props.children}
			<DisplayIcon icon={EndIcon} />
		</div>
	);
}

export { BetterBadge, betterBadgeVariants };
