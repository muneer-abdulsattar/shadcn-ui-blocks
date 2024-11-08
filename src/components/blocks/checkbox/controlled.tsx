"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";

export default function ControlledCheckboxDemo() {
  const [checked, setChecked] = useState<CheckedState>(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms-controlled"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <label
        htmlFor="terms-controlled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
