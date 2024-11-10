import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SelectColorDemo() {
  return (
    <div className="grid sm:grid-cols-3 gap-3 w-full">
      <div className="grow">
        <Label className="mb-2 block">Green</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="bg-green-600/25 dark:text-white text-green-600 border-none shadow-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="[&_div:focus]:bg-green-600 [&_div:focus]:text-white">
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grow">
        <Label className="mb-2 block">Indigo</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="bg-indigo-600/25 dark:text-white text-indigo-600 border-none shadow-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="[&_div:focus]:bg-indigo-600 [&_div:focus]:text-white">
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grow">
        <Label className="mb-2 block">Rose</Label>
        <Select defaultValue="apple">
          <SelectTrigger className="bg-rose-600/25 dark:text-white text-rose-600 border-none shadow-none">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="[&_div:focus]:bg-rose-600 [&_div:focus]:text-white">
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
