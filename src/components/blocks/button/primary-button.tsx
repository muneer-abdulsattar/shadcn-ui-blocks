import { Button } from "@/components/ui/button";
import { LoaderIcon, StarIcon } from "lucide-react";

const PrimaryButtonDemo = () => (
  <div className="flex items-center gap-2">
    <Button>Primary</Button>
    <Button size="icon">
      <StarIcon />
    </Button>
    <Button>
      <StarIcon /> Star
    </Button>
    <Button disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </Button>
  </div>
);

export default PrimaryButtonDemo;
