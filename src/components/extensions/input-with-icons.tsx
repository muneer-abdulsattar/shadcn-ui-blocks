import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { type ButtonHTMLAttributes } from "react";

type Icon =
	| React.ComponentType<{ className?: string }>
	| React.ReactElement
	| string;

type TailwindSpacingString =
	| "px"
	| "0"
	| "0.5"
	| "1"
	| "1.5"
	| "2"
	| "2.5"
	| "3"
	| "3.5"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "14"
	| "16"
	| "20"
	| "24"
	| "28"
	| "32"
	| "36"
	| "40"
	| "44"
	| "48"
	| "52"
	| "56"
	| "60"
	| "64"
	| "72"
	| "80"
	| "96";

const DisplayIcon = ({
	icon,
	className,
}: {
	icon?: Icon;
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

interface InputWithIconsProps extends InputProps {
	StartIcon?: Icon;
	EndIcon?: Icon;
	StartButton?: { icon: Icon } & ButtonHTMLAttributes<HTMLButtonElement>;
	EndButton?: { icon: Icon } & ButtonHTMLAttributes<HTMLButtonElement>;
	EndSize?: TailwindSpacingString;
	StartSize?: TailwindSpacingString;
}

export default function InputWithIcons({
	StartIcon,
	EndIcon,
	EndSize,
	StartSize,
	StartButton,
	EndButton,
	...props
}: InputWithIconsProps) {
	return (
		<div className="relative">
			{EndIcon && (
				<div className="absolute inset-y-0 flex justify-center items-center peer-disabled:opacity-50 pe-3 text-muted-foreground/80 pointer-events-none end-0">
					<DisplayIcon icon={EndIcon} />
				</div>
			)}
			{EndButton && (
				<button
					className="focus:z-10 absolute inset-y-0 flex justify-center items-center disabled:opacity-50 focus-visible:border-ring rounded-e-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 w-9 h-full text-muted-foreground/80 hover:text-foreground transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none end-0"
					aria-label="Subscribe"
					{...EndButton}
				>
					<DisplayIcon icon={EndButton.icon} />
				</button>
			)}

			<Input
				{...props}
				className={cn(
					"peer ",
					{
						"ps-9": StartIcon || StartButton,
						"pe-9": EndIcon || EndButton,
					},
					StartSize && `ps-${StartSize}`,
					EndSize && `pe-${EndSize}`,
					props.className,
				)}
			/>

			{StartButton && (
				<button
					className="focus:z-10 absolute inset-y-0 flex justify-center items-center disabled:opacity-50 focus-visible:border-ring rounded-s-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 w-9 h-full text-muted-foreground/80 hover:text-foreground transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none start-0"
					aria-label="Subscribe"
					{...StartButton}
				>
					<DisplayIcon icon={StartButton.icon} />
				</button>
			)}

			{StartIcon && (
				<div className="absolute inset-y-0 flex justify-center items-center peer-disabled:opacity-50 ps-3 text-muted-foreground/80 pointer-events-none start-0">
					<DisplayIcon icon={StartIcon} />
				</div>
			)}
		</div>
	);
}
