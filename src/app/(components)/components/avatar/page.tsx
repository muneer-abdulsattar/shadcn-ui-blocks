import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avatar",
  description: "An image element with a fallback for representing the user.",
};

const AvatarBlocks = () => (
  <div>
    <MainHeading>Avatar</MainHeading>
    <DescriptionText className="mt-1">
      An image element with a fallback for representing the user.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="avatar" name="default" />
      <Block
        title="Clickable with tooltip"
        type="avatar"
        name="clickable-with-tooltip"
      />
      <Block title="Size" type="avatar" name="size" />
      <Block title="Color" type="avatar" name="color" />
      <Block title="Shape" type="avatar" name="shape" />
      <Block title="Fallback" type="avatar" name="fallback" />
      <Block title="With Ring" type="avatar" name="with-ring" />
      <Block title="With Badge" type="avatar" name="with-badge" />
      <Block title="Group" type="avatar" name="group" />
      <Block title="Group max avatar" type="avatar" name="max-avatar-group" />
    </div>
  </div>
);

export default AvatarBlocks;
