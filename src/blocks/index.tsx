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
};
