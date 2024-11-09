import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badge",
  description: "Displays a badge or a component that looks like a badge.",
};

const BadgeBlocks = () => (
  <div>
    <MainHeading>Badge</MainHeading>
    <DescriptionText className="mt-1">
      Displays a badge or a component that looks like a badge.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="badge" name="default" />
      <Block title="Secondary" type="badge" name="secondary" />
      <Block title="outline" type="badge" name="outline" />
      <Block title="Destructive" type="badge" name="destructive" />
      <Block title="Rounded" type="badge" name="rounded" />
      <Block title="Status" type="badge" name="status" />
      <Block title="With image" type="badge" name="with-image" />
      <Block title="With icon" type="badge" name="with-icon" />
      <Block title="Clickable" type="badge" name="clickable" />
      <Block title="Clickable link" type="badge" name="clickable-link" />
    </div>
  </div>
);

export default BadgeBlocks;
