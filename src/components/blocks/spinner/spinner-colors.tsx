import { Loader2Icon } from "lucide-react";

export default function SpinnerColorsDemo() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Loader2Icon className="animate-spin" />
      <Loader2Icon className="animate-spin text-destructive" />
      <Loader2Icon className="animate-spin text-blue-600" />
      <Loader2Icon className="animate-spin text-emerald-600" />
    </div>
  );
}
