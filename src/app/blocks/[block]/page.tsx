import { blocks } from "@/blocks";
import BlockControls from "@/components/blocks/block-controls";
import BlockPreview from "@/components/blocks/block-preview";
import FileExplorer from "@/components/blocks/file-explorer";
import { Navbar } from "@/components/layout/navbar";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl, capitalize } from "@/lib/utils";
import { BlockProvider } from "@/providers/block-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = ({
  params: { block },
}: {
  params: { block: string };
}): Metadata => {
  const blockDetails = blocks[block];

  return constructMetadata({
    title: `${blockDetails.title} - ${capitalize(
      blockDetails.category
    )} section Shadcn UI block`,
    description: `Fully customized and responsive ${blockDetails.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    alternates: {
      canonical: absoluteUrl(`/blocks/${block}`),
    },
  });
};

const BlockPage = ({ params: { block } }: { params: { block: string } }) => {
  if (!blocks[block]) notFound();

  const { files, title, description } = blocks[block];

  return (
    <BlockProvider>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto py-8 px-4">
        <MainHeading>{title}</MainHeading>
        {description && <DescriptionText>{description}</DescriptionText>}

        <Tabs defaultValue="preview" className="mt-6">
          <div className="mb-4 flex items-center gap-2 justify-between pr-1.5">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <BlockControls />
          </div>

          <TabsContent value="preview">
            <BlockPreview block={block} />
          </TabsContent>
          <TabsContent value="code">
            <FileExplorer files={files} />
          </TabsContent>
        </Tabs>
      </div>
    </BlockProvider>
  );
};

export default BlockPage;
