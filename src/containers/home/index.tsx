'use client'

import { Pawn, RenderModel, TextAnimation } from '@/components'
import { LayoutMain } from '@/layouts'

export const Home = () => {
  return (
    <LayoutMain>
      <div className="h-screen w-full overflow-hidden">
        <div className="relative z-20 mb-20 w-full text-white">
          <div className="mx-auto w-full">
            <TextAnimation />
          </div>
        </div>
        <RenderModel>
          <Pawn />
        </RenderModel>
      </div>
    </LayoutMain>
  )
}
