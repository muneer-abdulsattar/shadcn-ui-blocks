import { blocks } from "@/blocks";
import { notFound } from "next/navigation";

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
