import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const SpinnerBlocks = () => (
  <div>
    <MainHeading>Spinner</MainHeading>
    <DescriptionText className="mt-1">
      Informs users about the status of ongoing processes.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="spinner" name="default" />
      <Block title="Circle" type="spinner" name="spinner-circle" />
      <Block title="Pinwheel" type="spinner" name="spinner-pinwheel" />
      <Block title="Colors" type="spinner" name="spinner-colors" />
      <Block title="Sizes" type="spinner" name="spinner-sizes" />
    </div>
  </div>
);

export default SpinnerBlocks;
