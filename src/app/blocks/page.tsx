import BlockPreviewList from "@/components/blocks/category/block-preview-list";

const BlocksPage = ({
  searchParams,
}: {
  searchParams: { columns: string; q: string };
}) => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 sm:py-16">
      <BlockPreviewList {...searchParams} />
    </div>
  );
};

export default BlocksPage;
