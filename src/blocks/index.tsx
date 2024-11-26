import { Block } from "@/types/blocks";
import * as React from "react";

export const blocks: Record<string, Block> = {
  "team-01": {
    name: "team-01",
    title: "Team 01",
    category: "team",
    component: React.lazy(() => import("@/blocks/team-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/team-01/page.tsx",
      },
    ],
  },
  "team-02": {
    name: "team-02",
    title: "Team 02",
    category: "team",
    component: React.lazy(() => import("@/blocks/team-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/team-02/page.tsx",
      },
    ],
  },
  "team-03": {
    name: "team-03",
    title: "Team 03",
    category: "team",
    component: React.lazy(() => import("@/blocks/team-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/team-03/page.tsx",
      },
    ],
  },
  "team-04": {
    name: "team-04",
    title: "Team 04",
    category: "team",
    component: React.lazy(() => import("@/blocks/team-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/team-04/page.tsx",
      },
    ],
  },
  "team-05": {
    name: "team-05",
    title: "Team 05",
    category: "team",
    component: React.lazy(() => import("@/blocks/team-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/team-05/page.tsx",
      },
    ],
  },
  "contact-01": {
    name: "contact-01",
    title: "Contact 01",
    category: "contact",
    component: React.lazy(() => import("@/blocks/contact-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/contact-01/page.tsx",
      },
    ],
  },
};

export const blockList = Object.values(blocks);

const getBlocksData = () => {
  const categories = [];
  const categorizedBlocks: Record<string, Block[]> = {};

  // Group blocks by category
  blockList.forEach((block) => {
    // Categorize blocks
    if (!categorizedBlocks[block.category as string]) {
      categorizedBlocks[block.category as string] = [];
    }
    categorizedBlocks[block.category as string].push(block);
  });

  // Generate categories
  for (const category in categorizedBlocks) {
    const blocks = categorizedBlocks[category];
    categories.push({ name: category, totalBlocks: blocks.length });
  }

  return { categories: categories, categorizedBlocks };
};

export const { categories: blockCategories, categorizedBlocks } =
  getBlocksData();
