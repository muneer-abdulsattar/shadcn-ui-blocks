"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

interface DualRangeSliderProps
	extends React.ComponentProps<typeof SliderPrimitive.Root> {
	labelPosition?: "top" | "bottom";
	label?: (value: number | undefined) => React.ReactNode;
}

const DualRangeSlider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	DualRangeSliderProps
>(({ className, label, labelPosition = "top", ...props }, ref) => {
	const initialValue = Array.isArray(props.value)
		? props.value
		: [props.min, props.max];

	return (
		<SliderPrimitive.Root
			ref={ref}
			className={cn(
				"relative flex w-full touch-none select-none items-center",
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track className="relative bg-secondary rounded-full w-full h-2 overflow-hidden grow">
				<SliderPrimitive.Range className="absolute bg-primary h-full" />
			</SliderPrimitive.Track>
			{initialValue.map((value, index) => (
				<React.Fragment key={index}>
					<SliderPrimitive.Thumb className="block relative bg-background disabled:opacity-50 border-2 border-primary rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-4 h-4 transition-colors disabled:pointer-events-none">
						{label && (
							<span
								className={cn(
									"absolute flex w-full justify-center",
									labelPosition === "top" && "-top-7",
									labelPosition === "bottom" && "top-4",
								)}
							>
								{label(value)}
							</span>
						)}
					</SliderPrimitive.Thumb>
				</React.Fragment>
			))}
		</SliderPrimitive.Root>
	);
});
DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
