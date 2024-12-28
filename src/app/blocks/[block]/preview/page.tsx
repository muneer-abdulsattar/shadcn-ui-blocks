import { blocks } from "@/blocks";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = ({
  params: { block },
}: {
  params: { block: string };
}): Metadata => {
  const blockDetails = blocks[block];

  return constructMetadata({
    title: `${blockDetails.title} Preview - Shadcn UI Blocks`,
    description: `Fully customized and responsive ${blockDetails.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    alternates: {
      canonical: absoluteUrl(`/blocks/${block}`),
    },
  });
};

const BlockPreviewPage = ({
  params: { block },
}: {
  params: { block: string };
}) => {
  if (!blocks[block]) notFound();

  const { component: Component } = blocks[block];

  return <Component />;
};

export default BlockPreviewPage;
