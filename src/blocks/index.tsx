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
    title: "Logos 06 (Infinite Scroll)",
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
    title: "Logos 07 (Infinite Scroll)",
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
  "blog-01": {
    name: "blog-01",
    title: "Blog 01",
    category: "blog",
    component: React.lazy(() => import("@/blocks/blog-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/blog-01/page.tsx",
      },
    ],
  },
  "blog-02": {
    name: "blog-02",
    title: "Blog 02",
    category: "blog",
    component: React.lazy(() => import("@/blocks/blog-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/blog-02/page.tsx",
      },
    ],
  },
  "blog-03": {
    name: "blog-03",
    title: "Blog 03",
    category: "blog",
    component: React.lazy(() => import("@/blocks/blog-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/blog-03/page.tsx",
      },
    ],
  },
  "navbar-01": {
    name: "navbar-01",
    title: "Navbar 01",
    category: "navbar",
    component: React.lazy(() => import("@/blocks/navbar-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/navbar-01/page.tsx",
      },
      {
        path: "logo.tsx",
        target: "app/navbar-01/logo.tsx",
      },
      {
        path: "nav-menu.tsx",
        target: "app/navbar-01/nav-menu.tsx",
      },
      {
        path: "navigation-sheet.tsx",
        target: "app/navbar-01/navigation-sheet.tsx",
      },
    ],
  },
  "navbar-02": {
    name: "navbar-02",
    title: "Navbar 02",
    category: "navbar",
    component: React.lazy(() => import("@/blocks/navbar-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/navbar-02/page.tsx",
      },
      {
        path: "logo.tsx",
        target: "app/navbar-02/logo.tsx",
      },
      {
        path: "nav-menu.tsx",
        target: "app/navbar-02/nav-menu.tsx",
      },
      {
        path: "navigation-sheet.tsx",
        target: "app/navbar-02/navigation-sheet.tsx",
      },
    ],
  },
  "navbar-03": {
    name: "navbar-03",
    title: "Navbar 03",
    category: "navbar",
    component: React.lazy(() => import("@/blocks/navbar-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/navbar-03/page.tsx",
      },
      {
        path: "logo.tsx",
        target: "app/navbar-03/logo.tsx",
      },
      {
        path: "nav-menu.tsx",
        target: "app/navbar-03/nav-menu.tsx",
      },
      {
        path: "navigation-sheet.tsx",
        target: "app/navbar-03/navigation-sheet.tsx",
      },
      {
        path: "config.tsx",
        target: "app/navbar-03/config.tsx",
      },
    ],
  },
  "navbar-04": {
    name: "navbar-04",
    title: "Navbar 04",
    category: "navbar",
    component: React.lazy(() => import("@/blocks/navbar-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/navbar-04/page.tsx",
      },
      {
        path: "logo.tsx",
        target: "app/navbar-04/logo.tsx",
      },
      {
        path: "nav-menu.tsx",
        target: "app/navbar-04/nav-menu.tsx",
      },
      {
        path: "navigation-sheet.tsx",
        target: "app/navbar-04/navigation-sheet.tsx",
      },
    ],
  },
  "navbar-05": {
    name: "navbar-05",
    title: "Navbar 05",
    category: "navbar",
    component: React.lazy(() => import("@/blocks/navbar-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/navbar-05/page.tsx",
      },
      {
        path: "logo.tsx",
        target: "app/navbar-05/logo.tsx",
      },
      {
        path: "nav-menu.tsx",
        target: "app/navbar-05/nav-menu.tsx",
      },
      {
        path: "navigation-sheet.tsx",
        target: "app/navbar-05/navigation-sheet.tsx",
      },
    ],
  },
  "login-01": {
    name: "login-01",
    title: "Login 01",
    category: "login",
    component: React.lazy(() => import("@/blocks/login-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/login-01/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "login-02": {
    name: "login-02",
    title: "Login 02",
    category: "login",
    component: React.lazy(() => import("@/blocks/login-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/login-02/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "login-03": {
    name: "login-03",
    title: "Login 03",
    category: "login",
    component: React.lazy(() => import("@/blocks/login-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/login-03/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "login-04": {
    name: "login-04",
    title: "Login 04",
    category: "login",
    component: React.lazy(() => import("@/blocks/login-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/login-04/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "login-05": {
    name: "login-05",
    title: "Login 05",
    category: "login",
    component: React.lazy(() => import("@/blocks/login-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/login-05/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "signup-01": {
    name: "signup-01",
    title: "Sign Up 01",
    category: "signup",
    component: React.lazy(() => import("@/blocks/signup-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/signup-01/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "signup-02": {
    name: "signup-02",
    title: "Sign Up 02",
    category: "signup",
    component: React.lazy(() => import("@/blocks/signup-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/signup-02/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "signup-03": {
    name: "signup-03",
    title: "Sign Up 03",
    category: "signup",
    component: React.lazy(() => import("@/blocks/signup-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/signup-03/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "signup-04": {
    name: "signup-04",
    title: "Sign Up 04",
    category: "signup",
    component: React.lazy(() => import("@/blocks/signup-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/signup-04/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "signup-05": {
    name: "signup-05",
    title: "Sign Up 05",
    category: "signup",
    component: React.lazy(() => import("@/blocks/signup-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/signup-05/page.tsx",
      },
      {
        path: "@/components/logo.tsx",
        target: "app/components/logo.tsx",
      },
    ],
  },
  "features-01": {
    name: "features-01",
    title: "Features 01",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-01/page.tsx",
      },
    ],
  },
  "features-02": {
    name: "features-02",
    title: "Features 02",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-02/page.tsx",
      },
    ],
  },
  "features-03": {
    name: "features-03",
    title: "Features 03",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-03/page.tsx",
      },
    ],
  },
  "features-04": {
    name: "features-04",
    title: "Features 04",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-04/page.tsx",
      },
    ],
  },
  "features-05": {
    name: "features-05",
    title: "Features 05",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-05/page.tsx",
      },
    ],
  },
  "features-06": {
    name: "features-06",
    title: "Features 06",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-06/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-06/page.tsx",
      },
    ],
  },
  "features-07": {
    name: "features-07",
    title: "Features 07",
    category: "features",
    component: React.lazy(() => import("@/blocks/features-07/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/features-07/page.tsx",
      },
    ],
  },
  "hero-01": {
    name: "hero-01",
    title: "Hero 01",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-01/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-01/page.tsx",
      },
    ],
  },
  "hero-02": {
    name: "hero-02",
    title: "Hero 02",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-02/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-02/page.tsx",
      },
    ],
  },
  "hero-03": {
    name: "hero-03",
    title: "Hero 03",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-03/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-03/page.tsx",
      },
    ],
  },
  "hero-04": {
    name: "hero-04",
    title: "Hero 04",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-04/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-04/page.tsx",
      },
    ],
  },
  "hero-05": {
    name: "hero-05",
    title: "Hero 05",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-05/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-05/page.tsx",
      },
    ],
  },
  "hero-06": {
    name: "hero-06",
    title: "Hero 06",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-06/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-06/page.tsx",
      },
      {
        path: "background-pattern.tsx",
        target: "app/hero-06/background-pattern.tsx",
      },
      {
        path: "@/components/ui/dot-pattern.tsx",
        target: "app/components/ui/dot-pattern.tsx",
      },
      {
        path: "@/components/ui/particles.tsx",
        target: "app/components/ui/particles.tsx",
      },
    ],
  },
  "hero-07": {
    name: "hero-07",
    title: "Hero 07",
    category: "hero",
    component: React.lazy(() => import("@/blocks/hero-07/page.tsx")),
    files: [
      {
        path: "page.tsx",
        target: "app/hero-07/page.tsx",
      },
      {
        path: "@/components/ui/animated-grid-pattern.tsx",
        target: "app/components/ui/animated-grid-pattern.tsx",
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
