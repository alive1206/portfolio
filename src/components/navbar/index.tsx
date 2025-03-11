'use client'

import { buttonVariants } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { classNames, navigationList } from '@/utils'
import { map } from 'lodash'
import { Dock, DockIcon } from '../magicui/dock'

export function Navbar() {
  return (
    <div className="fixed bottom-10 z-50 flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          {map(navigationList, (i) => (
            <DockIcon key={i.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    aria-label={i.title}
                    className={classNames(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12 rounded-full px-4')}
                  >
                    {i.icon}
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
