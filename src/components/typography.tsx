import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface HeadingProps {
  className?: string;
  children: ReactNode;
}
interface SubHeadingProps {
  className?: string;
  children: ReactNode;
}

export const MainHeading: FC<HeadingProps> = ({ className, ...props }) => (
  <h1
    className={cn("text-4xl font-extrabold tracking-tight", className)}
    {...props}
  ></h1>
);

export const SubHeading: FC<SubHeadingProps> = ({ className, ...props }) => (
  <h2
    className={cn("text-2xl font-bold tracking-tight", className)}
    {...props}
  ></h2>
);
