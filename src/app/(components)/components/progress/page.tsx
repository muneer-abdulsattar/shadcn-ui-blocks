import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progress",
  description:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
};

const ProgressBlocks = () => (
  <div>
    <MainHeading>Progress</MainHeading>
    <DescriptionText className="mt-1">
      Displays an indicator showing the completion progress of a task, typically
      displayed as a progress bar.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="progress" name="default" />
      <Block
        title="Linear with label"
        type="progress"
        name="linear-with-label"
      />
      <Block title="Linear color" type="progress" name="linear-color" />
      <Block
        title="Rounded progress indicator"
        type="progress"
        name="rounded"
      />
      <Block title="Circular" type="progress" name="circular" />
      <Block
        title="Circular with label"
        type="progress"
        name="circular-with-label"
      />
      <Block
        title="Circular with custom label"
        type="progress"
        name="circular-with-custom-label"
      />
      <Block title="Circular color" type="progress" name="circular-color" />
      <Block
        title="Circular progress shape"
        type="progress"
        name="circular-progress-shape"
      />
      <Block
        title="Circular stroke width"
        type="progress"
        name="circular-stroke-width"
      />
    </div>
  </div>
);

export default ProgressBlocks;
