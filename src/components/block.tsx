import { getFileContent } from "@/lib/file";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import SyntaxHighlighter from "./SyntaxHighlighter/SyntaxHighlighter";
import { SubHeading } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface BlockProps {
  title: string;
  children?: ReactNode;
  name: string;
  description?: ReactNode;
  type: string;
}

const Block: FC<BlockProps> = async ({ title, type, description, name }) => {
  const src = `src/components/customized/${type}/${name}.tsx`;
  const code = await getFileContent(src);

  // Dynamically import the component from its path
  const DynamicComponent = dynamic(() =>
    import(`@/components/customized/${type}/${name}.tsx`).catch(
      () => BlockNotFound
    )
  );

  return (
    <div>
      <SubHeading>{title}</SubHeading>
      {description && (
        <p className="mb-4 text-muted-foreground">{description}</p>
      )}
      <Tabs defaultValue="preview" className="mt-2">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="mt-2 p-4 md:p-10 border min-h-80 w-full rounded flex items-center justify-center">
            <DynamicComponent />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const BlockNotFound = () => <p>Block not found</p>;

export default Block;
