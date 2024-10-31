import { Input } from "@/components/ui/input";

export default function FilledInputDemo() {
  return (
    <div className="w-full max-w-xs">
      <Input
        type="email"
        placeholder="Email"
        className="bg-secondary border-none shadow-none"
      />
    </div>
  );
}
