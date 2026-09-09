'use client'

import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"
import { ReactElement, useRef } from "react"

type IHomeParallaxImageProps = {
    imageUrl: string
    imageBlurUrl: string
    topic: string
    detail: string
}
type IHomeParallaxProps = {
    imageList: IHomeParallaxImageProps[]
    avatar: string
    avatarPlaceholder: string
}
type IHomeParallax = (props: IHomeParallaxProps) => ReactElement

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const DATE_PATTERN = /\d{1,2}\/\d{1,2}\/\d{4}/

const ParallaxFrame = ({ image, index, reverse }: { image: IHomeParallaxImageProps, index: number, reverse: boolean }): ReactElement =>
{
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const imageY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"])
    const textY = useTransform(scrollYProgress, [0, 1], [40, -40])
    const textOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0, 1, 1, 0])
    const dotScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.7, 1.3, 0.7])
    const dotOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0.35, 1, 1, 0.35])
    const date = image.detail.match(DATE_PATTERN)?.[0]

    return (
        <div ref={ref} className="relative flex w-full flex-col items-center gap-10 py-28 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-8 md:py-40">
            <div
                className={`relative h-[60vh] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/10 md:row-start-1 md:h-[70vh] ${reverse ? "md:col-start-3" : "md:col-start-1"}`}
            >
                <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
                    <Image
                        src={image.imageUrl}
                        fill
                        placeholder="blur"
                        blurDataURL={image.imageBlurUrl}
                        alt={image.topic}
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="object-cover"
                        priority={index === 0}
                    />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="grain-overlay pointer-events-none absolute inset-0" />
            </div>

            <div className="relative hidden h-full md:col-start-2 md:row-start-1 md:flex md:items-center md:justify-center">
                <motion.div style={{ scale: dotScale, opacity: dotOpacity }} className="relative flex items-center justify-center">
                    <span className="absolute size-8 rounded-full bg-white/10 blur-md" />
                    <span className="relative size-2.5 rounded-full bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.45)] ring-4 ring-zinc-950" />
                </motion.div>
            </div>

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className={`flex w-full flex-col items-center gap-3 px-6 text-center md:row-start-1 md:items-start md:px-0 md:text-left ${reverse ? "md:col-start-1" : "md:col-start-3"}`}
            >
                {date && <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500">{date}</span>}
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{image.topic}</h3>
                <span className="h-px w-10 bg-linear-to-r from-transparent via-zinc-500 to-transparent md:from-zinc-500 md:via-zinc-700 md:to-transparent" />
                <p className="text-xs tracking-[0.2em] text-zinc-400">{image.detail}</p>
            </motion.div>
        </div>
    )
}

const HomeParallax: IHomeParallax = ({ imageList, avatar, avatarPlaceholder }) =>
{
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const { scrollYProgress: pageProgress } = useScroll()

    const bgY = useTransform(heroProgress, [0, 1], ["0%", "35%"])
    const bgScale = useTransform(heroProgress, [0, 1], [1.1, 1.3])
    const avatarY = useTransform(heroProgress, [0, 1], [0, -60])
    const heroTextY = useTransform(heroProgress, [0, 1], [0, -140])
    const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])

    return (
        <main className="relative w-full overflow-clip bg-zinc-950">
            <motion.div
                style={{ scaleX: pageProgress }}
                className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-linear-to-r from-zinc-400 via-white to-zinc-400"
            />

            <section ref={heroRef} className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
                <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
                    <Image
                        src={imageList[0].imageUrl}
                        fill
                        placeholder="blur"
                        blurDataURL={imageList[0].imageBlurUrl}
                        alt=""
                        sizes="100vw"
                        className="object-cover opacity-40 blur-[2px]"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/70 to-zinc-950" />
                <div className="grain-overlay pointer-events-none absolute inset-0" />

                <motion.div style={{ opacity: heroOpacity }} className="relative flex flex-col items-center gap-4">
                    <motion.div
                        style={{ y: avatarY }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="relative flex items-center justify-center py-4"
                    >
                        <div className="avatar-glow pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(228,228,231,0.18)_0%,_transparent_65%)] blur-2xl" />
                        <Image
                            src={avatar}
                            width={1046}
                            height={1394}
                            alt="วัชวิศ วิริยะธรรม"
                            placeholder="blur"
                            blurDataURL={avatarPlaceholder}
                            className="relative size-72 rounded-full object-cover shadow-2xl shadow-black/60 ring-1 ring-white/10 sm:size-80"
                        />
                    </motion.div>

                    <motion.div
                        style={{ y: heroTextY }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                        className="flex flex-col items-center gap-4 py-6"
                    >
                        <h2 className="text-center text-xs font-light uppercase tracking-[0.3em] text-zinc-500">A full stack web developer</h2>
                        <span className="h-px w-12 bg-linear-to-r from-transparent via-zinc-600 to-transparent" />
                        <h1 className="text-center text-5xl font-semibold tracking-tight bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">Watchawit Wiriyatham</h1>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ opacity: { duration: 0.6, delay: 0.8 }, y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </section>

            <section className="relative mx-auto flex w-full max-w-5xl flex-col px-6 md:px-10">
                <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-600/70 to-transparent md:block" />
                {imageList.map((image, i) => (
                    <ParallaxFrame key={i} image={image} index={i} reverse={i % 2 === 1} />
                ))}
            </section>

            <footer className="relative z-40 flex w-full flex-col items-center gap-3 bg-zinc-950 py-20">
                <span className="h-px w-16 bg-linear-to-r from-transparent via-zinc-700 to-transparent" />
                <p className="text-center text-[10px] font-light uppercase tracking-[0.25em] text-zinc-600">From</p>
                <p className="text-center text-sm font-light tracking-[0.2em] text-zinc-300">Watchawit Wiriyatham</p>
            </footer>
        </main>
    )
}

export default HomeParallax
