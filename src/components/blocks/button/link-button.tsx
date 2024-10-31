import { Button } from "@/components/ui/button";

const LinkButtonDemo = () => (
  <div className="flex items-center gap-2">
    <Button variant="link">Link</Button>
    <Button variant="link" disabled>
      Disabled Link
    </Button>
  </div>
);

export default LinkButtonDemo;
