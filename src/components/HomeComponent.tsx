'use client'

import Image from "next/image"
import { useState } from "react"
import Modal from "./Modal"

const HomeComponent = ({ imagePathname, imageBlurUrl }:{ imagePathname: string, imageBlurUrl: string }) =>
{
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className="w-screen h-screen mx-auto flex flex-col justify-between gap-4 pt-10 pb-4">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="inline-flex items-center gap-2">
                    <Image src={imagePathname} width={140} height={140} alt="วัชวิศ วิริยะธรรม" placeholder="blur" blurDataURL={imageBlurUrl} className="w-80 h-80 animate-pulse object-cover rounded-full cursor-pointer hover:scale-110 scale-100 transition-all duration-300" onClick={() => setShow(true)} />
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
            <Modal isShow={show} onClose={() => setShow(false)} />
        </div>
    )
}

export default HomeComponent