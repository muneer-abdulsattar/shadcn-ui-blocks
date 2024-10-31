import { Button } from "@/components/ui/button";
import { LoaderIcon, StarIcon } from "lucide-react";

const GhostButtonDemo = () => (
  <div className="flex items-center gap-2">
    <Button variant="ghost">Ghost</Button>
    <Button variant="ghost" size="icon">
      <StarIcon />
    </Button>

    <Button variant="ghost">
      <StarIcon /> Star
    </Button>

    <Button variant="ghost" disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </Button>
  </div>
);

export default GhostButtonDemo;
