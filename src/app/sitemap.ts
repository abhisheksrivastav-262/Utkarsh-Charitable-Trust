import type { MetadataRoute } from "next";
import { ACTIVITIES, POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utkarshcharitabletrust.com";
  const staticPages = ["", "/about", "/leadership", "/activities", "/vridh-seva-dham", "/gallery", "/blog", "/donate", "/volunteer", "/contact"];
  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
  ACTIVITIES.forEach((a) => pages.push({ url: `${base}/activities/${a.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }));
  POSTS.forEach((p) => pages.push({ url: `${base}/blog/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }));
  return pages;
}
