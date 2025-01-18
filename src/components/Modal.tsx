import { AnimatePresence, motion } from "motion/react"
import { ReactNode } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children, isShow, onClose }:{ children: ReactNode, isShow: boolean, onClose: () => void }) =>
{
    if (typeof window === "object")
    {
        return createPortal(
            <AnimatePresence>
            {
                isShow && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full fixed top-0 left-0 p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, backdropFilter: "blur(0)" }}
                            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                            exit={{ opacity: 0, backdropFilter: "blur(0)" }}
                            className="w-full h-full bg-black/20 backdrop-blur-md fixed top-0 left-0 z-10 cursor-pointer"
                            onClick={onClose}
                        >
                        </motion.div>
                        <div className="w-full h-full max-w-screen-sm relative top-0 left-1/2 -translate-x-1/2 overflow-scroll z-30 modal-content">
                            {children}
                        </div>
                    </motion.div>
                )
            }
            </AnimatePresence>
        , document.body)
    }
}

export default Modal