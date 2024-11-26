import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import BlocksFilter from "@/components/blocks/category/blocks-filter";

const BlockCategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  return (
    <div className="max-w-screen-xl mx-auto py-12 sm:py-16">
      <h1 className="text-center text-5xl font-black tracking-tight max-w-2xl mx-auto">
        All the Shadcn UI blocks you&apos;ll ever need in one place.
      </h1>

      <BlocksFilter />
      <BlockPreviewList category={category} />
    </div>
  );
};

export default BlockCategoryPage;
