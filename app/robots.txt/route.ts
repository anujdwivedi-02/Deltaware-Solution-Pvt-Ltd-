export const dynamic = "force-static";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const robots = `User-agent: *\nAllow: /\nSitemap: https://deltawaresolution.com/sitemap.xml`;
  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
