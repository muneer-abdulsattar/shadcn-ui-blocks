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

  return [
    {
      url: "https://shadcn-ui-blocks.akashmoradiya.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...componentsSitemap,
  ];
}
