import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { createPortal } from "react-dom"

const Modal = ({ isShow, onClose }:{ isShow: boolean, onClose: () => void }) =>
{
    return createPortal(
        <AnimatePresence>
        {
            isShow && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex items-center justify-center fixed top-0 left-0 p-4">
                    <motion.div className="w-full h-full bg-black/20 backdrop-blur-md fixed top-0 left-0 z-10 cursor-pointer" onClick={onClose}></motion.div>
                    <motion.div initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: -50 }} className="w-inherit h-inherit relative top-0 left-0 z-20 text-white p-4">
                        <Image src="/james.jpg" width={1080} height={1920} alt="วัชวิศ วิริยะธรรม" className="rounded-xl object-cover w-[90%] h-[90%]" />
                    </motion.div>
                </motion.div>
            )
        }
        </AnimatePresence>
    , document.body)
}

export default Modal