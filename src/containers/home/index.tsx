'use client'

import { Navbar, Pawn, RenderModel } from '@/components'
import { LayoutMain } from '@/layouts'
import { WelcomeSection } from './components'

export const Home = () => {
  return (
    <LayoutMain>
      <div className="h-screen w-full overflow-hidden">
        <WelcomeSection />
        <RenderModel>
          <Pawn />
        </RenderModel>
      </div>
      <Navbar />
    </LayoutMain>
  )
}
