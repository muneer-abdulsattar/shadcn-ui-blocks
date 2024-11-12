import Block from "@/components/block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table",
  description: "A responsive table component.",
};

const TableBlocks = () => (
  <div>
    <MainHeading>Table</MainHeading>
    <DescriptionText className="mt-1">
      A responsive table component.
    </DescriptionText>

    <div className="mt-12 space-y-10">
      <Block title="Default" type="table" name="default" />
      <Block title="Bordered" type="table" name="bordered" />
      <Block title="Striped rows" type="table" name="striped-rows" />
      <Block title="Rounded corners" type="table" name="rounded-corners" />
      <Block title="With pagination" type="table" name="with-pagination" />
      <Block title="Sticky header" type="table" name="sticky-header" />
      <Block title="Sticky columns" type="table" name="sticky-columns" />
      <Block title="Overflow scroll" type="table" name="overflow-scroll" />
    </div>
  </div>
);

export default TableBlocks;
