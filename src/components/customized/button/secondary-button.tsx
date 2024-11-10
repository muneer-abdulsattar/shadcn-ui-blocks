import { Button } from "@/components/ui/button";
import { LoaderIcon, StarIcon } from "lucide-react";

const SecondaryButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button variant="secondary">Secondary</Button>
    <Button variant="secondary" size="icon">
      <StarIcon />
    </Button>
    <Button variant="secondary">
      <StarIcon /> Star
    </Button>
    <Button variant="secondary" disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </Button>
  </div>
);

export default SecondaryButtonDemo;
