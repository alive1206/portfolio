import { TextAnimation } from '@/components'

export const WelcomeSection = () => {
  return (
    <div className="absolute top-20 z-10 w-screen text-white">
      <div className="flex w-full justify-center text-8xl" style={{ textShadow: '1px 1px 2px pink' }}>
        <TextAnimation />
      </div>
    </div>
  )
}
