import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";

const CardBlocks = () => (
  <div>
    <MainHeading>Card</MainHeading>
    <DescriptionText className="mt-1">
      Displays a card with header, content, and footer.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="card" name="default" />
      <Block title="With background" type="card" name="with-background" />
      <Block title="Sign Up" type="card" name="create-account" />
      <Block title="Banner" type="card" name="card-banner" />
      <Block title="Pricing" type="card" name="card-pricing" />
      <Block title="Post" type="card" name="card-post" />
    </div>
  </div>
);

export default CardBlocks;
