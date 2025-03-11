import { motion } from 'framer-motion'

export const CursorBlinker = () => {
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: 'linear',
        time: [0, 0.5, 0.5, 1],
      },
    },
  }

  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-20 w-[1px] translate-y-1 bg-white"
    ></motion.div>
  )
}
