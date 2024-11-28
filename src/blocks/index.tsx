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
  "contact-02": {
    name: "contact-02",
    title: "Contact 02",
    category: "contact",
    component: React.lazy(() => import("@/blocks/contact-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/contact-02/page.tsx",
      },
    ],
  },
  "contact-03": {
    name: "contact-03",
    title: "Contact 03",
    category: "contact",
    component: React.lazy(() => import("@/blocks/contact-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/contact-03/page.tsx",
      },
    ],
  },
  "footer-01": {
    name: "footer-01",
    title: "Footer 01",
    category: "footer",
    component: React.lazy(() => import("@/blocks/footer-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/footer-01/page.tsx",
      },
    ],
  },
  "footer-02": {
    name: "footer-02",
    title: "Footer 02",
    category: "footer",
    component: React.lazy(() => import("@/blocks/footer-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/footer-02/page.tsx",
      },
    ],
  },
  "footer-03": {
    name: "footer-03",
    title: "Footer 03",
    category: "footer",
    component: React.lazy(() => import("@/blocks/footer-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/footer-03/page.tsx",
      },
    ],
  },
  "footer-04": {
    name: "footer-04",
    title: "Footer 04",
    category: "footer",
    component: React.lazy(() => import("@/blocks/footer-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/footer-04/page.tsx",
      },
    ],
  },
  "footer-05": {
    name: "footer-05",
    title: "Footer 05",
    category: "footer",
    component: React.lazy(() => import("@/blocks/footer-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/footer-05/page.tsx",
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
