import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const CheckboxBlocks = () => (
  <div>
    <MainHeading>Button</MainHeading>
    <DescriptionText className="mt-1">
      Displays a button or a component that looks like a button.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="With Text" type="checkbox" name="with-text" />
      <Block title="Disabled" type="checkbox" name="disabled-checkbox" />
      <Block title="Colors" type="checkbox" name="colors" />
      <Block title="Sizes" type="checkbox" name="sizes" />
      {/* TODO */}
      <Block title="Icon" type="checkbox" name="icon" />
      <Block title="Horizontal Group" type="checkbox" name="horizontal-group" />
      <Block title="Vertical Group" type="checkbox" name="vertical-group" />
      <Block title="Indeterminate" type="checkbox" name="indeterminate" />
      <Block title="Controlled" type="checkbox" name="controlled" />
    </div>
  </div>
);

export default CheckboxBlocks;
