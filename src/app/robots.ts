import type { MetadataRoute } from "next"

const SITE_URL = "https://jameslufz.me"

export default function robots(): MetadataRoute.Robots
{
    return {
        rules: [
            { userAgent: "*", allow: "/", disallow: ["/primo-world/"] },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    }
}
