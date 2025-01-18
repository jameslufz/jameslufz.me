'use client'

import Image from "next/image"
import { Fragment, ReactElement, useEffect, useState } from "react"
import Modal from "./Modal"

type IHomeComponentImageListProps = {
    imageUrl: string
    imageBlurUrl: string
    topic: string
    detail: string
}
type IHomeComponentProps = {
    imageList: IHomeComponentImageListProps[]
}
type IHomeComponent = (props: IHomeComponentProps) => ReactElement

const HomeComponent: IHomeComponent = ({ imageList }) =>
{
    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {

        if(show)
        {
            const eventListener = (e: KeyboardEvent) =>
            {
                if( e.key === "Escape" )
                {
                    setShow(false)
                }
            }
            window.addEventListener("keydown", eventListener)

            return () => window.removeEventListener("keydown", eventListener)
        }

    }, [show])

    return (
        <div className="w-full h-full mx-auto flex flex-col justify-between gap-4 pt-10 pb-4">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="inline-flex items-center gap-2">
                    <Image src={imageList[0].imageUrl} width={1046} height={1394} alt="วัชวิศ วิริยะธรรม" placeholder="blur" blurDataURL={imageList[0].imageBlurUrl} className="w-80 h-80 animate-pulse object-cover rounded-full cursor-pointer hover:scale-110 scale-100 transition-all duration-300" onClick={() => setShow(true)} />
                </div>
                <div className="py-6">
                    <h2 className="text-center text-xl font-light leading-loose">ไม่มีอะไรครับ ผมแค่</h2>
                    <h1 className="text-center text-4xl">อยากไปกางเต็นท์โว้ย !</h1>
                </div>
            </div>

            <div className="inline-flex flex-col items-center gap-2">
                <p className="text-center text-zinc-600">From</p>
                <p className="text-center text-xs text-zinc-300 tracking-widest">Watchawit Wiriyatham</p>
            </div>

            <Modal isShow={show} onClose={() => setShow(false)}>
                <div className="w-fit h-fit text-white inline-flex items-center justify-center flex-col gap-6 p-4">
                    {
                        imageList.map((image, i) => (
                            <Fragment key={i}>
                                <Image src={image.imageUrl} placeholder="blur" blurDataURL={image.imageBlurUrl} width={1080} height={1920} alt="วัชวิศ วิริยะธรรม" className="rounded-xl object-cover w-full h-full" />
                                <div>
                                    <p className="text-center tracking-widest leading-loose">{image.topic}</p>
                                    <p className="text-center text-xs tracking-widest leading-loose">{image.detail}</p>
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </Modal>
        </div>
    )
}

export default HomeComponent