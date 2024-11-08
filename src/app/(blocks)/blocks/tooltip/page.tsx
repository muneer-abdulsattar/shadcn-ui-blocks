import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooltip",
  description:
    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
};

const TooltipBlocks = () => (
  <div>
    <MainHeading>Tooltip</MainHeading>
    <DescriptionText className="mt-1">
      A popup that displays information related to an element when the element
      receives keyboard focus or the mouse hovers over it.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="tooltip" name="default" />
      <Block title="With arrow" type="tooltip" name="with-arrow" />
      <Block title="Directions" type="tooltip" name="tooltip-directions" />
      <Block
        title="Disable Hoverable Content"
        type="tooltip"
        name="with-disabled-hoverable-content"
        description="Prevents TooltipContent from remaining open when hovering. Disabling this has accessibility consequences."
      />
      <Block title="With delay" type="tooltip" name="tooltip-with-delay" />
      <Block
        title="With skip delay"
        type="tooltip"
        name="tooltip-with-skip-delay-duration"
        description="How much time a user has to enter another trigger without incurring a delay again."
      />
      <Block
        title="Portal"
        type="tooltip"
        name="tooltip-portal"
        description="When used, portals the content part into the body."
      />
    </div>
  </div>
);

export default TooltipBlocks;
