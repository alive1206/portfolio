'use client'

import { buttonVariants } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { classNames, navigationList } from '@/utils'
import { map } from 'lodash'
import { Dock, DockIcon } from '../magicui/dock'

type Props = {
  index: number
  setCurrentSection: (index: number) => void
}

export const Navbar: React.FC<Props> = ({ index, setCurrentSection }) => {
  return (
    <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2">
      <TooltipProvider>
        <Dock direction="middle">
          {map(navigationList, (i) => (
            <DockIcon key={i.index} onClick={() => setCurrentSection(i.index)}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    aria-label={i.title}
                    className={classNames(buttonVariants({ variant: 'ghost', size: 'icon' }), `size-12 rounded-full px-4`)}
                  >
                    <span className={`${index === i.index && 'text-pink-300'}`}>{i.icon}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{i.title}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
