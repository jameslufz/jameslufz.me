import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
    display: "swap",
    subsets: ["thai"],
    weight: ["100", "300", "400", "500", "700"],
    variable: "--font-noto-sans-thai"
})

const SITE_URL = "https://jameslufz.me"
const SITE_TITLE = "โปรแกรมเมอร์ ที่ชอบกางเต็นท์นิดหน่อย"
const SITE_DESCRIPTION = "บันทึกการท่องเที่ยวและกางเต็นท์ของเจมส์ วัชวิศ นักพัฒนาเว็บฟูลสแตก"
const SITE_IMAGE = "/profile/1.jpg"

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: "%s | James Lufz",
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "James Lufz", "วัชวิศ วิริยะธรรม", "Full Stack Developer", "นักพัฒนาเว็บ",
        "Web Developer Thailand", "Next.js Developer", "TypeScript", "กางเต็นท์", "ท่องเที่ยว",
    ],
    publisher: "James Lufz",
    authors: [{ name: "James Lufz", url: SITE_URL }],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: "profile",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        firstName: "วัชวิศ",
        lastName: "วิริยะธรรม",
        images: [{ url: SITE_IMAGE, width: 1333, height: 2000, alt: "James Lufz" }],
        countryName: "ประเทศไทย",
        url: SITE_URL,
        siteName: "James Lufz",
        locale: "th_TH",
        gender: "ชาย",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [SITE_IMAGE],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Watchawit Wiriyatham",
    alternateName: "James Lufz",
    url: SITE_URL,
    image: `${SITE_URL}${SITE_IMAGE}`,
    jobTitle: "Full Stack Developer",
    nationality: "Thai",
    knowsAbout: [
        "TypeScript", "Next.js", "Nest.js", "Vue.js", "Golang", "PHP",
        "MySQL", "PostgreSQL", "MongoDB", "Redis", "DigitalOcean", "Alibaba Cloud",
    ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>)
{
    return (
        <html lang="th">
            <body className={`${notoSansThai.variable}`}>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
            </body>
        </html>
    )
}
