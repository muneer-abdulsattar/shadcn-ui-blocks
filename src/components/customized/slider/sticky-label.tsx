"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    stickyLabel?: React.ReactElement;
  }
>(({ className, stickyLabel, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20 data-[orientation=vertical]:w-1.5 data-[orientation=vertical]:h-full">
      <SliderPrimitive.Range className="absolute h-full bg-primary data-[orientation=vertical]:w-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="group/thumb block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      {stickyLabel && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
          {stickyLabel}
        </div>
      )}
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default function SliderWithStickyLabelDemo() {
  const [progress, setProgress] = React.useState([30]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Slider
        defaultValue={progress}
        max={100}
        step={1}
        onValueChange={setProgress}
        className="max-w-sm h-40"
        stickyLabel={<Badge className="mb-1">{progress[0]}%</Badge>}
      />
    </div>
  );
}
