import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx, { ClassValue } from 'clsx'
import { Suspense } from 'react'

type Props = {
  children: React.ReactNode
  className?: ClassValue[]
}

export const RenderModel: React.FC<Props> = ({ children, className }) => {
  return (
    <Canvas className={clsx('relative z-10 h-screen w-screen', className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="forest" />
    </Canvas>
  )
}
