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
  "stats-01": {
    name: "stats-01",
    title: "Stats 01",
    category: "stats",
    component: React.lazy(() => import("@/blocks/stats-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/stats-01/page.tsx",
      },
    ],
  },
  "stats-02": {
    name: "stats-02",
    title: "Stats 02",
    category: "stats",
    component: React.lazy(() => import("@/blocks/stats-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/stats-02/page.tsx",
      },
    ],
  },
  "logos-01": {
    name: "logos-01",
    title: "Logos 01",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-01/page.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
    ],
  },
  "logos-02": {
    name: "logos-02",
    title: "Logos 02",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-02/page.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
    ],
  },
  "logos-03": {
    name: "logos-03",
    title: "Logos 03",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-03/page.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
    ],
  },
  "logos-04": {
    name: "logos-04",
    title: "Logos 04",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-04/page.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
    ],
  },
  "logos-05": {
    name: "logos-05",
    title: "Logos 05",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-05/page.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
    ],
  },
  "logos-06": {
    name: "logos-06",
    title: "Logos 06",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-06/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-06/page.tsx",
      },
      {
        path: "@/components/ui/marquee.tsx",
        target: "components/ui/marquee.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
      {
        path: "tailwind.config.ts",
        target: "tailwind.config.ts",
      },
    ],
  },
  "logos-07": {
    name: "logos-07",
    title: "Logos 07",
    category: "logos",
    component: React.lazy(() => import("@/blocks/logos-07/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/logos-07/page.tsx",
      },
      {
        path: "@/components/ui/marquee.tsx",
        target: "components/ui/marquee.tsx",
      },
      {
        path: "@/components/logos.tsx",
        target: "components/logos.tsx",
      },
      {
        path: "tailwind.config.ts",
        target: "tailwind.config.ts",
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
