import { Button } from "@/components/ui/button";

const GroupButtonDemo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <div>
      <Button className="rounded-r-none">Left</Button>
      <Button className="rounded-none">Middle</Button>
      <Button className="rounded-l-none">Right</Button>
    </div>
    <div className="divide-x divide-muted-foreground">
      <Button className="rounded-r-none">Left</Button>
      <Button className="rounded-none">Middle</Button>
      <Button className="rounded-l-none">Right</Button>
    </div>
  </div>
);

export default GroupButtonDemo;
