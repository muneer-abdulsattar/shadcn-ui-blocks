import { blockCategories } from "@/blocks";
import BlockCategoryJsonLd from "@/components/blocks/category/block-category-json-ld";
import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import BlocksFilter from "@/components/blocks/category/blocks-filter";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

const keywordsTemplate = [
  "{{category}} Shadcn UI blocks",
  "Shadcn UI {{category}} examples",
  "{{category}} UI components",
  "{{category}} section code snippets",
  "{{category}} design templates",
  "Responsive {{category}} UI blocks",
  "Shadcn UI {{category}} code snippets",
  "{{category}} block preview and copy",
  "Ready-made {{category}} UI designs",
  "{{category}} section UI blocks for websites",
  "Customizable {{category}} Shadcn components",
  "Shadcn UI {{category}} templates",
  "Shadcn UI blocks for {{category}",
  "Elegant {{category}} design examples",
  "{{category}} integration with Shadcn",
  "Minimalist {{category}} section blocks",
  "{{category}} components for modern websites",
  "Professional {{category}} UI designs",
  "{{category}} section layout ideas",
];

export const generateStaticParams = async () => {
  return blockCategories.map((category) => ({
    category: category.name,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}): Metadata => {
  const { category } = params;
  const title = `${capitalize(
    category
  )} section Shadcn UI blocks | Preview & Copy`;
  const description = `Explore beautifully designed ${category} section blocks built with Shadcn UI. Preview, customize, and copy code snippets effortlessly to enhance your website's design and functionality.`;
  const keywords = keywordsTemplate.map((keyword) =>
    keyword.replaceAll("{{category}}", capitalize(category))
  );

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
};

const BlockCategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  return (
    <div className="max-w-screen-xl mx-auto py-12 sm:py-16">
      <h1 className="text-center text-5xl font-black tracking-tight max-w-2xl mx-auto">
        All the Shadcn UI blocks you&apos;ll ever need in one place.
      </h1>

      <BlocksFilter />
      <BlockPreviewList category={category} />

      <BlockCategoryJsonLd category={category} />
    </div>
  );
};

export default BlockCategoryPage;
