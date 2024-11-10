import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select",
  description:
    "Displays a list of options for the user to pick from—triggered by a button.",
};

const SelectBlocks = () => (
  <div>
    <MainHeading>Select</MainHeading>
    <DescriptionText className="mt-1">
      Displays a list of options for the user to pick from—triggered by a
      button.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="select" name="default" />
      <Block title="Size" type="select" name="size" />
      <Block title="Color" type="select" name="color" />
      <Block title="Variant" type="select" name="variant" />
      <Block title="Shape" type="select" name="shape" />
      <Block title="With an icon" type="select" name="with-icon" />
      <Block
        title="Select menu position"
        type="select"
        name="select-menu-position"
      />
      <Block title="Scrollable" type="select" name="scrollable" />
      <Block title="Controlled" type="select" name="controlled" />
    </div>
  </div>
);

export default SelectBlocks;
