import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import { Navbar } from "@/components/layout/navbar";

const BlocksPage = ({
  searchParams,
}: {
  searchParams: { columns: string; q: string };
}) => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-12 sm:py-16">
        <BlockPreviewList {...searchParams} />
      </div>
    </>
  );
};

export default BlocksPage;
