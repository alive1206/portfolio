'use client'

import { Navbar, RenderModel, SnowFlies } from '@/components'
import { LayoutMain } from '@/layouts'
import { classNames } from '@/utils'
import { css } from '@emotion/css'
import { useProgress } from '@react-three/drei'
import { map } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AboutSection, ContactSection, ProjectSection, WelcomeSection } from './components'

import dynamic from 'next/dynamic'
const PawnDynamic = dynamic(() => import('@/components/models/pawn').then((mod) => mod.Pawn), {
  ssr: false,
})

export const Home = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  // const [loading, setLoading] = useState(true)

  const { progress } = useProgress()

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
    let touchStartX = 0
    let touchEndX = 0

    const handleWheel = (e: WheelEvent) => {
      if (!isScrolling) {
        if (e.deltaY > 0) {
          goToSection(currentSection + 1)
        } else {
          goToSection(currentSection - 1)
        }
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isScrolling) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          goToSection(currentSection + 1)
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          goToSection(currentSection - 1)
        }
      }
    }

    //Mobile event
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX
      const deltaX = touchEndX - touchStartX

      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) {
          goToSection(currentSection + 1)
        } else {
          goToSection(currentSection - 1)
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('wheel', handleWheel)
      window.addEventListener('keydown', handleKeydown)

      //Mobile event
      window.addEventListener('touchstart', handleTouchStart)
      window.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('wheel', handleWheel)
        window.removeEventListener('keydown', handleKeydown)

        //Mobile event
        window.removeEventListener('touchstart', handleTouchStart)
        window.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [currentSection, goToSection, isScrolling, progress])

  //TODO: Optimize loading
  // if (loading) {
  //   return <Progress value={progress} />
  // }
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
          <div key={section.label} className="absolute top-20 w-screen">
            {section.component}
          </div>
        ))}
      </div>
      <RenderModel>
        <PawnDynamic />
      </RenderModel>
      <Navbar index={currentSection} setCurrentSection={setCurrentSection} />
      <SnowFlies />
    </LayoutMain>
  )
}
