import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textarea",
  description:
    "Displays a form textarea or a component that looks like a textarea.",
};

const TextareaBlocks = () => (
  <div>
    <MainHeading>Textarea</MainHeading>
    <DescriptionText className="mt-1">
      Displays a form textarea or a component that looks like a textarea.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="textarea" name="default" />
      <Block
        title="With background"
        type="textarea"
        name="with-background-color"
      />
      <Block title="Disabled" type="textarea" name="disabled" />
      <Block title="With label" type="textarea" name="with-label" />
      <Block title="Rows" type="textarea" name="rows" />
      <Block title="With helper text" type="textarea" name="with-helper-text" />
      <Block title="Controlled" type="textarea" name="controlled" />
    </div>
  </div>
);

export default TextareaBlocks;
