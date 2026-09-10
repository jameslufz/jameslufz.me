import HomeParallax from "@/components/HomeParallax"
import { getHomeData } from "@/lib/getHomeData"

export default async function Home()
{
    const { avatarPlaceholder, imageList } = await getHomeData()

    return (
        <HomeParallax
            avatarPlaceholder={avatarPlaceholder}
            imageList={imageList}
        />
    )
}
