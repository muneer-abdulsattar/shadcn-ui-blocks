import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Separator",
  description: "Visually or semantically separates content.",
};

const SeparatorBlocks = () => (
  <div>
    <MainHeading>Separator</MainHeading>
    <DescriptionText className="mt-1">
      Visually or semantically separates content.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="separator" name="default" />
      <Block
        title="Horizontal separator with label"
        type="separator"
        name="with-label-horizontal"
      />
      <Block
        title="Horizontal separator with chip"
        type="separator"
        name="with-chip-horizontal"
      />
      <Block title="Dashed" type="separator" name="separator-dashed" />
      <Block title="Vertical" type="separator" name="separator-vertical" />
      <Block
        title="Vertical with chip"
        type="separator"
        name="with-chip-vertical"
      />
    </div>
  </div>
);

export default SeparatorBlocks;
