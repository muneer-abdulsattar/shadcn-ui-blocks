import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const AlertBlocks = () => (
  <div>
    <MainHeading>Alert</MainHeading>
    <DescriptionText className="mt-1">
      Displays a callout for user attention.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Primary" type="alert" name="default" />
      <Block title="Destructive" type="alert" name="alert-destructive" />
      <Block title="Success" type="alert" name="alert-success" />
      <Block title="Warning" type="alert" name="alert-warning" />
      <Block title="Info" type="alert" name="alert-info" />
      <Block title="With background" type="alert" name="with-background" />
      <Block title="With actions" type="alert" name="with-actions" />
    </div>
  </div>
);

export default AlertBlocks;
