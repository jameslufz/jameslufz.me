import type { NextConfig } from "next";

import withPlaiceholder from "@plaiceholder/next";

const headersConfig = (process.env.NODE_ENV === "production" ? 
    [{
        source: "/:all*(jpg|jpeg|png|gif|ico|svg|webp)", // match รูปภาพ
        headers: [
            {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
            },
        ],
    }]
    : []
)
const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: "https", hostname: "**" },
        ],
        minimumCacheTTL: 60 * 60 * 24,
    },
    async headers() {
        return headersConfig
    },
    output: "standalone",
    compress: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
        styledComponents: true,
    },
    experimental: {
        optimizeCss: true,
    }
};

export default withPlaiceholder(nextConfig);
