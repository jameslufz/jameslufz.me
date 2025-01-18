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
    title: "อยากรู้อะไร เกี่ยวกับวัชวิศ ?",
    description: "นาย วัชวิศ เป็นแค่คนรักแมวคนนึงที่อยากไปกางเต็นท์เฉยๆ ขอบคุณครับ",
    keywords: ["วัชวิศ", "วิริยะธรรม", "เจมส์ วัชวิศ", "เจมส์ วัชวิศ วิริยะธรรม", "นายกสโมสร มทร. สงขลา 62", "เจมส์ สาระ", "พี่ตากล้อง โพกผ้าแดง", "กูฮาคีย์เวิร์ดก่อนหน้ามาก", "เว็บนี้ทำตอนกูเมาสิงห์ 2 ขวด"],
    publisher: "Mister Lufz",
    openGraph: {
        title: "อยากรู้อะไร เกี่ยวกับวัชวิศ ?",
        description: "นาย วัชวิศ เป็นแค่คนรักแมวคนนึงที่อยากไปกางเต็นท์เฉยๆ ขอบคุณครับ",
        firstName: "วัชวิศ",
        lastName: "วิริยะธรรม",
        images: "/james.jpg",
        countryName: "ประเทศไทย",
        url: "https://jameslufz.me",
        writers: "James Lufz",
        gender: "ชาย",
        tags: ["วัชวิศ", "วิริยะธรรม", "เจมส์ วัชวิศ", "เจมส์ วัชวิศ วิริยะธรรม", "นายกสโมสร มทร. สงขลา 62", "เจมส์ สาระ", "พี่ตากล้อง โพกผ้าแดง", "กูฮาคีย์เวิร์ดก่อนหน้ามาก", "เว็บนี้ทำตอนกูเมาสิงห์ 2 ขวด"],
    },
    twitter: {
        title: "อยากรู้อะไร เกี่ยวกับวัชวิศ ?",
        description: "นาย วัชวิศ เป็นแค่คนรักแมวคนนึงที่อยากไปกางเต็นท์เฉยๆ ขอบคุณครับ",
        images: "/james.jpg",
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
