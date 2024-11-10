import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Group",
  description:
    "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
};

const RadioGroupBlocks = () => (
  <div>
    <MainHeading>Radio Group</MainHeading>
    <DescriptionText className="mt-1">
      A set of checkable buttons—known as radio buttons—where no more than one
      of the buttons can be checked at a time.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="radio-group" name="default" />
      <Block title="Orientation" type="radio-group" name="orientation" />
      <Block title="Disabled" type="radio-group" name="disabled" />
      <Block title="Color" type="radio-group" name="color" />
      <Block title="Size" type="radio-group" name="size" />
      <Block title="Variant" type="radio-group" name="variant" />
    </div>
  </div>
);

export default RadioGroupBlocks;
