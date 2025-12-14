export const dynamic = "force-static";

import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://deltawaresolution.com";

const staticRoutes = [
  "/",
  "/about",
  "/careers",
  "/certification",
  "/contact",
  "/enroll-now",
  "/privacy-policy",
  "/services",
  "/terms-of-service",
  "/services/ai-ml",
  "/services/cloud-computing",
  "/services/cybersecurity",
  "/services/internships",
  "/services/technical-training",
  "/services/web-development",
];

export async function GET(req: NextRequest) {
  const urls = staticRoutes
    .map(
      (route) =>
        `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
