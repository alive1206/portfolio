import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { CursorBlinker } from './cusor-blinker'

export const TextAnimation = () => {
  const text = 'Hello, my name is Thang.' as string
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest))
  // const textIndex = useMotionValue(0)
  // const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 3,
      ease: 'easeIn',
      // repeat: Infinity,
      // repeatType: 'reverse',
      // repeatDelay: 5,
      // onUpdate(latest) {
      //   if (updatedThisRound.get() === true && latest > 0) {
      //     updatedThisRound.set(false)
      //   } else if (updatedThisRound.get() === false && latest === 0) {
      //     if (textIndex.get() === text.length - 1) {
      //       textIndex.set(0)
      //     } else {
      //       textIndex.set(textIndex.get() + 1)
      //     }
      //     updatedThisRound.set(true)
      //   }
      // },
    })
    return controls.stop
  }, [count])

  return (
    <span>
      <motion.span className="uppercase">{displayText}</motion.span>
      <CursorBlinker />
    </span>
  )
}
