import { blocks } from "@/blocks";
import BlockControls from "@/components/blocks/block-controls";
import BlockPreview from "@/components/blocks/block-preview";
import FileExplorer from "@/components/blocks/file-explorer";
import { DescriptionText, MainHeading } from "@/components/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockProvider } from "@/providers/block-provider";
import { notFound } from "next/navigation";

const BlockPage = ({ params: { block } }: { params: { block: string } }) => {
  if (!blocks[block]) notFound();

  const { files, title, description } = blocks[block];

  return (
    <BlockProvider>
      <div className="max-w-screen-xl mx-auto py-20 px-4">
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
