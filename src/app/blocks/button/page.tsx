import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const ButtonBlocks = () => (
  <div>
    <MainHeading>Button</MainHeading>
    <DescriptionText className="mt-1">
      Displays a button or a component that looks like a button.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Primary" type="button" name="primary-button" />
      <Block title="Secondary" type="button" name="secondary-button" />
      <Block title="Destructive" type="button" name="destructive-button" />
      <Block title="Outline" type="button" name="outline-button" />
      <Block title="Ghost" type="button" name="ghost-button" />
      <Block title="Link" type="button" name="link-button" />
      <Block title="Gradient" type="button" name="gradient-button" />
      <Block title="Rounded" type="button" name="rounded-button" />
      <Block title="Full Width" type="button" name="full-width-button" />
      <Block title="Group" type="button" name="group-button" />
      <Block title="With badge" type="button" name="with-badge" />
      <Block title="With tooltip" type="button" name="with-tooltip" />
      <Block
        title="With tap animation"
        type="button"
        name="with-tap-animation"
      />
    </div>
  </div>
);

export default ButtonBlocks;
