import HomeParallax from "@/components/HomeParallax"
import { getHomeData } from "@/lib/getHomeData"

export default async function Home()
{
    const { avatar, avatarPlaceholder, imageList } = await getHomeData()

    return (
        <HomeParallax
            avatar={avatar}
            avatarPlaceholder={avatarPlaceholder}
            imageList={imageList}
        />
    )
}
