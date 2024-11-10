import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accordion",
  description:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
};

const AccordionBlocks = () => (
  <div>
    <MainHeading>Accordion</MainHeading>
    <DescriptionText className="mt-1">
      A vertically stacked set of interactive headings that each reveal a
      section of content.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="accordion" name="default" />
      <Block title="Outline" type="accordion" name="accordion-outline" />
      <Block title="Contained" type="accordion" name="accordion-contained" />
      <Block
        title="Default Open"
        type="accordion"
        name="accordion-default-open"
      />
      <Block
        title="Multiple expanded at a time"
        type="accordion"
        name="accordion-multiple-open"
      />
      <Block
        title="Expand Icon"
        type="accordion"
        name="accordion-expand-icon"
      />
      <Block
        title="Disabled Item"
        type="accordion"
        name="accordion-item-disabled"
      />
      <Block title="Controlled" type="accordion" name="accordion-controlled" />
    </div>
  </div>
);

export default AccordionBlocks;
