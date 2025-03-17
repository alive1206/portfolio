import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  className?: string
}

export const ScaleDiv: React.FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      className={`rounded border shadow-md hover:shadow-pink-100 ${className}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
