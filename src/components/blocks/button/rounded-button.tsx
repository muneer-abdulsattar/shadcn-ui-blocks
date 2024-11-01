import { Button } from "@/components/ui/button";
import { LoaderIcon, StarIcon } from "lucide-react";

const RoundedButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button className="rounded-full">Rounded</Button>
    <Button className="rounded-full" size="icon">
      <StarIcon />
    </Button>
    <Button className="rounded-full">
      <StarIcon /> Star
    </Button>
    <Button className="rounded-full" disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </Button>
  </div>
);

export default RoundedButtonDemo;
