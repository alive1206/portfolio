'use client'

import { Navbar, Pawn, RenderModel } from '@/components'
import { LayoutMain } from '@/layouts'
import { classNames } from '@/utils'
import { css } from '@emotion/css'
import { map } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AboutSection, ContactSection, ProjectSection, WelcomeSection } from './components'

export const Home = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  // const [touchStartY, setTouchStartY] = useState(0)
  // const [touchEndY, setTouchEndY] = useState(0)

  const sectionList = useMemo(
    () => [
      {
        index: 0,
        label: 'Home',
        component: <WelcomeSection />,
      },
      {
        index: 1,
        label: 'About',
        component: <AboutSection />,
      },

      {
        index: 2,
        label: 'Project',
        component: <ProjectSection />,
      },
      {
        index: 3,
        label: 'Contact',
        component: <ContactSection />,
      },
    ],
    []
  )

  const goToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sectionList.length && !isScrolling) {
        setIsScrolling(true)
        setCurrentSection(index)
        setTimeout(() => {
          setIsScrolling(false)
        }, 500)
      }
    },
    [isScrolling, sectionList.length]
  )

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isScrolling) {
        if (e.deltaY > 0) {
          goToSection(currentSection + 1)
        } else {
          goToSection(currentSection - 1)
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('wheel', handleWheel)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('wheel', handleWheel)
      }
    }
  }, [currentSection, goToSection, isScrolling])

  return (
    <LayoutMain>
      <div
        className={classNames(
          'absolute z-50 h-full transition-transform duration-300 ease-in-out',
          css`
            width: ${sectionList.length * 100}vw;
            transform: translateX(-${currentSection * 100}vw);
          `
        )}
      >
        {map(sectionList, (section) => (
          <div key={section.label} className="absolute top-20 w-screen text-center">
            {section.component}
          </div>
        ))}
      </div>
      <RenderModel>
        <Pawn />
      </RenderModel>
      <Navbar index={currentSection} setCurrentSection={setCurrentSection} />
    </LayoutMain>
  )
}
