import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Switch",
  description:
    "A control that allows the user to toggle between checked and not checked.",
};

const SwitchBlocks = () => (
  <div>
    <MainHeading>Switch</MainHeading>
    <DescriptionText className="mt-1">
      A control that allows the user to toggle between checked and not checked.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="switch" name="default" />
      <Block title="With label" type="switch" name="with-label" />
      <Block title="Disabled" type="switch" name="disabled" />
      <Block title="Colors" type="switch" name="colors" />
      <Block title="Sizes" type="switch" name="sizes" />
      <Block title="Controlled" type="switch" name="controlled" />
      <Block title="Customization" type="switch" name="customization" />
    </div>
  </div>
);

export default SwitchBlocks;
