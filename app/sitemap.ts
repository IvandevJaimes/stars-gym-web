import type { MetadataRoute } from "next";
import { CONTACT } from "@/lib/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CONTACT.site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
