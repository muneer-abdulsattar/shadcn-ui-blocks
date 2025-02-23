"use client";

import { cn } from "@/lib/utils";
import { Shapes } from "lucide-react";

export const Logo = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      <Shapes className="-mt-0.5 h-5 w-5" />
    </div>
  );
};
