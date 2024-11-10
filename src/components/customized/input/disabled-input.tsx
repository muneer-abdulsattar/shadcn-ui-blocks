import { Input } from "@/components/ui/input";

export default function DisabledInputDemo() {
  return (
    <div className="w-full max-w-xs">
      <Input type="email" placeholder="Email" disabled />
    </div>
  );
}
