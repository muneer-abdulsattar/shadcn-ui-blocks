import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slider",
  description:
    "An input where the user selects a value from within a given range.",
};

const SelectBlocks = () => (
  <div>
    <MainHeading>Slider</MainHeading>
    <DescriptionText className="mt-1">
      An input where the user selects a value from within a given range.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="slider" name="default" />
      <Block title="Disabled" type="slider" name="disabled" />
      <Block title="Size" type="slider" name="size" />
      <Block title="Color" type="slider" name="color" />
      <Block title="Shape" type="slider" name="shape" />
      <Block title="With label" type="slider" name="with-label" />
      <Block title="With sticky label" type="slider" name="sticky-label" />
      <Block title="Vertical" type="slider" name="vertical" />
      <Block title="Range" type="slider" name="range" />
    </div>
  </div>
);

export default SelectBlocks;
