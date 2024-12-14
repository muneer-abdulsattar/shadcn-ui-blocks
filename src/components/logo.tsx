import { Shapes } from "lucide-react";

export const Logo = (props: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Shapes className="-mt-0.5 h-5 w-5" />
      </div>
    </div>
  );
};
