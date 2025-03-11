import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { CursorBlinker } from './cusor-blinker'

export const TextAnimation = () => {
  const text = 'Welcome to my portfolio!' as string
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest))

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 3,
      ease: 'easeInOut',
    })
    return controls.stop
  }, [])

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  )
}
