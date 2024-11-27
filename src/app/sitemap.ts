import { blockCategories } from "@/blocks";
import { components } from "@/description/app-sidebar";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const componentsSitemap: MetadataRoute.Sitemap = components.map(
    ({ url }) => ({
      url: `https://shadcn-ui-blocks.akashmoradiya.com${url}`,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );
  const blocksCategorySitemap: MetadataRoute.Sitemap = blockCategories.map(
    ({ name }) => ({
      url: `https://shadcn-ui-blocks.akashmoradiya.com/blocks/categories/${name}`,
      changeFrequency: "daily",
      priority: 1,
    })
  );

  return [
    {
      url: "https://shadcn-ui-blocks.akashmoradiya.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://shadcn-ui-blocks.akashmoradiya.com/components/introduction",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://shadcn-ui-blocks.akashmoradiya.com/blocks",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...componentsSitemap,
    ...blocksCategorySitemap,
  ];
}
