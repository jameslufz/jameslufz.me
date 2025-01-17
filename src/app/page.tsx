import HomeComponent from "@/components/HomeComponent";
import * as fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function Home()
{
    const imagePath = "/james.jpg"
    const imagePathFull =  __dirname + "/../../../public" + imagePath
    const file = await fs.readFile(imagePathFull)
    const { base64 } = await getPlaiceholder(file)

    return (
        <HomeComponent imagePathname={imagePath} imageBlurUrl={base64} />
    )
}