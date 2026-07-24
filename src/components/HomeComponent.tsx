'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { ReactElement } from "react"

type IHomeComponentImageListProps = {
    imageUrl: string
    imageBlurUrl: string
    topic: string
    detail: string
}
type IHomeComponentProps = {
    imageList: IHomeComponentImageListProps[]
    avatar: string
    avatarPlaceholder: string
}
type IHomeComponent = (props: IHomeComponentProps) => ReactElement

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE }
})

const HomeComponent: IHomeComponent = ({ imageList, avatar, avatarPlaceholder }) =>
{
    return (
        <main className="w-full flex flex-col">
            <section className="w-full min-h-screen flex flex-col items-center justify-center gap-4 py-10">
                <motion.div {...fadeUp(0.1)} className="relative flex items-center justify-center py-4">
                    <div className="avatar-glow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-[radial-gradient(circle,_rgba(228,228,231,0.18)_0%,_transparent_65%)] blur-2xl" />
                    <Image
                        src={avatar}
                        width={1046}
                        height={1394}
                        alt="วัชวิศ วิริยะธรรม"
                        placeholder="blur"
                        blurDataURL={avatarPlaceholder}
                        className="relative size-80 object-cover rounded-full ring-1 ring-white/10 shadow-2xl shadow-black/60 transition-transform duration-500 ease-out hover:scale-105"
                    />
                </motion.div>
                <motion.div {...fadeUp(0.3)} className="py-6 flex flex-col items-center gap-4">
                    <h2 className="text-center text-xs font-light tracking-[0.3em] uppercase text-zinc-500">A full stack web developer</h2>
                    <span className="h-px w-12 bg-linear-to-r from-transparent via-zinc-600 to-transparent" />
                    <h1 className="text-center text-5xl font-semibold tracking-tight bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">Joury Memory Logs</h1>
                </motion.div>
            </section>

            <section className="w-full max-w-sm mx-auto flex flex-col items-center gap-16 py-16 px-4">
                {
                    imageList.map((image, i) => (
                        <motion.figure
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: EASE }}
                            className="w-full flex flex-col items-center gap-4 text-white"
                        >
                            <Image src={image.imageUrl} placeholder="blur" blurDataURL={image.imageBlurUrl} width={1080} height={1920} alt="วัชวิศ วิริยะธรรม" className="w-full h-auto rounded-2xl object-cover ring-1 ring-white/10 shadow-2xl shadow-black/50" />
                            <figcaption className="flex flex-col gap-1">
                                <p className="text-center text-sm tracking-[0.2em] leading-relaxed">{image.topic}</p>
                                <p className="text-center text-xs tracking-[0.2em] leading-relaxed text-zinc-400">{image.detail}</p>
                            </figcaption>
                        </motion.figure>
                    ))
                }
            </section>

            <footer className="w-full flex flex-col items-center gap-3 py-16">
                <span className="h-px w-16 bg-linear-to-r from-transparent via-zinc-700 to-transparent" />
                <p className="text-center text-[10px] font-light tracking-[0.25em] uppercase text-zinc-600">From</p>
                <p className="text-center text-sm font-light tracking-[0.2em] text-zinc-300">Watchawit Wiriyatham</p>
            </footer>
        </main>
    )
}

export default HomeComponent
