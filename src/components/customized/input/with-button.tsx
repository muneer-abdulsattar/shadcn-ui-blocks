import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputWithButtonDemo() {
  return (
    <div className="w-full max-w-xs flex items-center">
      <Input
        type="email"
        placeholder="Email"
        className="rounded-r-none focus-visible:ring-0"
      />
      <Button className="rounded-l-none shadow">Subscribe</Button>
    </div>
  );
}
