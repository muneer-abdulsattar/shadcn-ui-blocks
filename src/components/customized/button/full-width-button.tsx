import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

const FullWidthButtonDemo = () => (
  <div className="w-full flex items-center gap-2">
    <Button className="w-full">
      <StarIcon /> Star
    </Button>
  </div>
);

export default FullWidthButtonDemo;
