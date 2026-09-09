import * as fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"

export type IHomeDataImage = {
    imageUrl: string
    imageBlurUrl: string
    topic: string
    detail: string
}

export type IHomeData = {
    avatar: string
    avatarPlaceholder: string
    imageList: IHomeDataImage[]
}

export async function getHomeData(): Promise<IHomeData>
{
    const avatarPath = "/san-pa-kia-1.jpg"
    const avatartPathFull = "./public" + avatarPath

    const kewMaePanPath = "/kiw-mae-pan.jpg"
    const kewMaePanPathFull = "./public" + kewMaePanPath
    const pangUngPath = "/pang-ung.jpeg"
    const pangUngPathFull = "./public" + pangUngPath
    const sanPaKiaTentPath = "/san-pa-kia-2.jpg"
    const sanPaKiaTentPathFull = "./public" + sanPaKiaTentPath
    const sanPaKiaTentInnerPath = "/san-pa-kia-3.jpg"
    const sanPaKiaTentInnerPathFull = "./public" + sanPaKiaTentInnerPath

    const [
        avatarFile,
        kewMaePanFile,
        pangUngFile,
        sanPaKiaTentPathFile,
        sanPaKiaTentInnerPathFile,
    ] = await Promise.all([
        fs.readFile(avatartPathFull),
        fs.readFile(kewMaePanPathFull),
        fs.readFile(pangUngPathFull),
        fs.readFile(sanPaKiaTentPathFull),
        fs.readFile(sanPaKiaTentInnerPathFull),
    ])

    const [
        { base64: avatar },
        { base64: pangUng },
        { base64: kewMaePan },
        { base64: sanPaKiaTent },
        { base64: sanPaKiaTentInner },
    ] = await Promise.all([
        getPlaiceholder(avatarFile),
        getPlaiceholder(pangUngFile),
        getPlaiceholder(kewMaePanFile),
        getPlaiceholder(sanPaKiaTentPathFile),
        getPlaiceholder(sanPaKiaTentInnerPathFile),
    ])

    return {
        avatar: avatarPath,
        avatarPlaceholder: avatar,
        imageList: [
            { topic: "คิดถึงดอยหลวงเชียงดาว", detail: "สถานีวิจัยเกษตรที่สูง สันป่าเกี๊ยะ, เชียงดาว 22/12/2025", imageUrl: sanPaKiaTentInnerPath, imageBlurUrl: sanPaKiaTentInner },
            { topic: "คิดถึงสันป่าเกี๊ยะ", detail: "สถานีวิจัยเกษตรที่สูง สันป่าเกี๊ยะ, เชียงดาว 22/12/2025", imageUrl: sanPaKiaTentPath, imageBlurUrl: sanPaKiaTent },
            { topic: "คิดถึงปางอุ๋ง", detail: "โครงการพระราชดำริปางตอง 2, แม่ฮ่องสอน 20/12/2024", imageUrl: pangUngPath, imageBlurUrl: pangUng },
            { topic: "คิดถึงกิ่วแม่ปาน", detail: "เส้นทางศึกษาธรรมชาติ กิ่วแม่ปาน, ดอยอินทนนท์ 21/12/2023", imageUrl: kewMaePanPath, imageBlurUrl: kewMaePan },
        ],
    }
}
