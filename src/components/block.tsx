import { getFileContent } from "@/lib/file";
import { Info } from "lucide-react";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import SyntaxHighlighter from "./SyntaxHighlighter/SyntaxHighlighter";
import { SubHeading } from "./typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
    <div className="h-[calc(100%-5.5rem)] self-stretch">
      <SubHeading className="flex items-center gap-2">
        {title}
        {description ? (
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{description}</p>
            </TooltipContent>
          </Tooltip>
        ) : null}
      </SubHeading>
      <Tabs defaultValue="preview" className="mt-2 h-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="h-full">
          <div className="mt-2 p-4 md:p-10 border h-full min-h-96 w-full rounded flex items-center justify-center">
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
