import { Switch } from "@/components/ui/switch";
import * as React from "react";

const SwitchColorsDemo = () => {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked />
      <Switch defaultChecked className="data-[state=checked]:bg-destructive" />
      <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
      <Switch defaultChecked className="data-[state=checked]:bg-emerald-600" />
    </div>
  );
};

export default SwitchColorsDemo;
