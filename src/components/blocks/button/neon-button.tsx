import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

const ButtonNeon = ({ className, ...props }: ButtonProps) => (
  <Button
    className={cn(
      "bg-indigo-500 text-primary-foreground hover:bg-indigo-600 shadow-lg shadow-indigo-400",
      className
    )}
    {...props}
  />
);

const NeonButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <ButtonNeon>Neon</ButtonNeon>
    <ButtonNeon size="icon">
      <StarIcon />
    </ButtonNeon>
    <ButtonNeon>
      <StarIcon /> Star
    </ButtonNeon>
  </div>
);

export default NeonButtonDemo;
