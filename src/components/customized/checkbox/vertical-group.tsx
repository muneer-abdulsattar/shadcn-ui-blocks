import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Beer, IceCreamBowl, Pizza, Sandwich } from "lucide-react";

const options = [
  {
    name: "pizza",
    label: "Pizza",
    icon: Pizza,
  },
  {
    name: "sandwich",
    label: "Sandwich",
    icon: Sandwich,
  },
  {
    name: "beer",
    label: "Beer",
    icon: Beer,
  },
  {
    name: "ice-cream",
    label: "Ice Cream",
    icon: IceCreamBowl,
  },
];

export default function CheckboxVerticalGroupDemo() {
  return (
    <div>
      <Label className="font-bold text-base">Select anything you like</Label>
      <div className="mt-2 flex flex-col items-start gap-4">
        {options.map(({ name, label, icon: Icon }) => (
          <div key={name} className="flex items-center gap-4">
            <Checkbox id={`${name}-vertical`} />
            <label
              htmlFor={`${name}-vertical`}
              className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <Icon className="h-5 w-5" />
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
