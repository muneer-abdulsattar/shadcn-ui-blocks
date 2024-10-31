import { Button } from "@/components/ui/button";
import { LoaderIcon, StarIcon } from "lucide-react";

const DestructiveButtonDemo = () => (
  <div className="flex items-center gap-2">
    <Button variant="destructive">Destructive</Button>
    <Button variant="destructive" size="icon">
      <StarIcon />
    </Button>
    <Button variant="destructive">
      <StarIcon /> Star
    </Button>

    <Button variant="destructive" disabled>
      <LoaderIcon className="animate-spin" /> Loading
    </Button>
  </div>
);

export default DestructiveButtonDemo;
