import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupOrientationDemo() {
  return (
    <div className="grid gap-8">
      <div>
        <Label className="mb-2 block font-semibold text-base">Vertical</Label>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1-vertical" />
            <Label htmlFor="r1-vertical">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2-vertical" />
            <Label htmlFor="r2-vertical">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3-vertical" />
            <Label htmlFor="r3-vertical">Compact</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label className="mb-2 block font-semibold text-base">Horizontal</Label>
        <RadioGroup
          defaultValue="comfortable"
          className="flex items-center gap-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1-horizontal" />
            <Label htmlFor="r1-horizontal">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2-horizontal" />
            <Label htmlFor="r2-horizontal">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3-horizontal" />
            <Label htmlFor="r3-horizontal">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
