import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const ButtonBlocks = () => (
  <div>
    <MainHeading>Tabs</MainHeading>
    <DescriptionText className="mt-1">
      A set of layered sections of content—known as tab panels—that are
      displayed one at a time.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="tabs" name="default" />
      <Block title="Underlined" type="tabs" name="underlined-tabs" />
      <Block title="Separated" type="tabs" name="separated-tabs" />
      <Block title="Vertical" type="tabs" name="vertical-tabs" />
      <Block title="Animated Content" type="tabs" name="animated-tabs" />
    </div>
  </div>
);

export default ButtonBlocks;
