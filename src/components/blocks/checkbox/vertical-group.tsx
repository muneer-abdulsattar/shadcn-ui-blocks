import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const technologies = [
  {
    name: "react",
    label: "React",
  },
  {
    name: "next",
    label: "Next",
  },
  {
    name: "node",
    label: "Node",
  },
  {
    name: "remix",
    label: "Remix",
  },
];

export default function CheckboxVerticalGroupDemo() {
  return (
    <div>
      <Label className="font-semibold">Technologies</Label>
      <div className="mt-2 flex flex-col items-start gap-4">
        {technologies.map(({ name, label }) => (
          <div key={name} className="flex items-center gap-1">
            <Checkbox id={`${name}-vertical`} />
            <label
              htmlFor={`${name}-vertical`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
