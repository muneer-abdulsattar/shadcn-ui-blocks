import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoaderIcon, StarIcon } from "lucide-react";

const ButtonGradient = ({ className, ...props }: ButtonProps) => (
  <Button
    className={cn(
      "bg-gradient-to-r from-blue-500 to-indigo-500 text-primary-foreground shadow hover:to-blue-500",
      className
    )}
    {...props}
  />
);

const GradientButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <ButtonGradient>Gradient</ButtonGradient>
    <ButtonGradient size="icon">
      <StarIcon />
    </ButtonGradient>
    <ButtonGradient>
      <StarIcon /> Star
    </ButtonGradient>
    <ButtonGradient disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </ButtonGradient>
  </div>
);

export default GradientButtonDemo;
