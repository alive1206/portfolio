import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  className?: string
}

export const FadeDiv: React.FC<Props> = ({ children, className }) => {
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={item} className={` ${className}`}>
      {children}
    </motion.div>
  )
}
