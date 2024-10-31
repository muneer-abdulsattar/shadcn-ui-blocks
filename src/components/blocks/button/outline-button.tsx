import { Button } from "@/components/ui/button";
import { LoaderIcon, StarIcon } from "lucide-react";

const OutlineButtonDemo = () => (
  <div className="flex items-center gap-2">
    <Button variant="outline">Outline</Button>
    <Button variant="outline" size="icon">
      <StarIcon />
    </Button>
    <Button variant="outline">
      <StarIcon /> Star
    </Button>
    <Button variant="outline" disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </Button>
  </div>
);

export default OutlineButtonDemo;
