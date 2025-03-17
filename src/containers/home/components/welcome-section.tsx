import { TextAnimation } from '@/components'

export const WelcomeSection = () => {
  return (
    <div className="absolute left-0 h-full w-full" style={{ textShadow: '1px 1px 2px pink' }}>
      <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-between text-center">
        <div className="text-6xl">
          <TextAnimation />
        </div>
        <div className="relative flex h-14 w-6 rounded-3xl border p-4">
          <div className="scroll-tips absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white"></div>
        </div>
      </div>
    </div>
  )
}
