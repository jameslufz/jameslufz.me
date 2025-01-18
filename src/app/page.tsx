import HomeComponent from "@/components/HomeComponent";
import * as fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function Home()
{
    const kewMaePanPath = "/james.jpg"
    const kewMaePanPathFull = __dirname + "/../../../public" + kewMaePanPath
    const kewMaePanFile = await fs.readFile(kewMaePanPathFull)
    const { base64: kewMaePan } = await getPlaiceholder(kewMaePanFile)

    const pangUngPath = "/pang-ung.JPG"
    const pangUngPathFull =  __dirname + "/../../../public" + pangUngPath
    const pangUngFile = await fs.readFile(pangUngPathFull)
    const { base64: pangUng } = await getPlaiceholder(pangUngFile)

    return (
        <HomeComponent imageList={[
            { topic: "คิดถึงกิ่วแม่ปาน", detail: "เส้นทางศึกษาธรรมชาติ กิ่วแม่ปาน, ดอยอินทนนท์ 21/12/2023", imageUrl: kewMaePanPath, imageBlurUrl: kewMaePan },
            { topic: "คิดถึงปางอุ๋ง", detail: "โครงการพระราชดำริปางตอง 2, แม่ฮ่องสอน 20/12/2024", imageUrl: pangUngPath, imageBlurUrl: pangUng },
        ]} />
    )
}