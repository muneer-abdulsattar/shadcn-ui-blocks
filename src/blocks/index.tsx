import { Block } from "@/types/blocks";
import * as React from "react";

export const blocks: Record<string, Block> = {
  "team-01": {
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
};
