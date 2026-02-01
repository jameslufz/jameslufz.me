import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
    display: "swap",
    subsets: ["thai"],
    weight: ["100", "300", "400", "500", "700"],
    variable: "--font-noto-sans-thai"
})

export const metadata: Metadata = {
    title: "โปรแกรมเมอร์ ที่ชอบกางเต็นท์นิดหน่อย",
    description: "บันทึกการท่องเที่ยวและกางเต็นท์ของเจมส์ วัชวิศ",
    publisher: "James Lufz",
    openGraph: {
        title: "โปรแกรมเมอร์ ที่ชอบกางเต็นท์นิดหน่อย",
        description: "บันทึกการท่องเที่ยวและกางเต็นท์ของเจมส์ วัชวิศ",
        firstName: "วัชวิศ",
        lastName: "วิริยะธรรม",
        images: "/james.jpg",
        countryName: "ประเทศไทย",
        url: "https://jameslufz.me",
        writers: "James Lufz",
        gender: "ชาย",
    },
    twitter: {
        title: "โปรแกรมเมอร์ ที่ชอบกางเต็นท์นิดหน่อย",
        description: "บันทึกการท่องเที่ยวและกางเต็นท์ของเจมส์ วัชวิศ",
        images: "/james.jpg",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>)
{
    return (
        <html lang="th">
            <body className={`${notoSansThai.variable}`}>
                {children}
            </body>
        </html>
    )
}
