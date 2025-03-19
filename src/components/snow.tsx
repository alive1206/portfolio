'use client'

import { useEffect, useState } from 'react'

interface Snow {
  id: number
  top: string
  left: string
  animationProps: string
}

const createSnow = () => ({
  id: Math.random(),
  top: `0`,
  left: `${Math.random() * 100}%`,
  animationProps: `snow 20s linear infinite`,
})
const createSnow2 = () => ({
  id: Math.random(),
  top: `-100px`,
  left: `${Math.random() * 100}%`,
  animationProps: `slowSnow 40s linear infinite`,
})

export const SnowFlies = () => {
  const [snowflies, setSnowflies] = useState<Snow[]>([])
  const [snowflies2, setSnowflies2] = useState<Snow[]>([])

  useEffect(() => {
    const addSnowPeriodically = () => {
      const newSnow = createSnow()
      const newSnow2 = createSnow2()
      setSnowflies2((currentSnowflies) => [...currentSnowflies.slice(-10), newSnow2])
      setSnowflies((currentSnowflies) => [...currentSnowflies.slice(-10), newSnow])
    }

    const interval = setInterval(addSnowPeriodically, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
      {snowflies.map((snow) => {
        return (
          <div
            key={snow.id}
            className="snow absolute h-[5px] w-[5px] rounded-full bg-white"
            style={{
              top: snow.top,
              left: snow.left,
              animation: snow.animationProps,
            }}
          ></div>
        )
      })}
      {snowflies2.map((snow) => {
        return (
          <div
            key={snow.id}
            className="snow2 absolute top-0 h-[8px] w-[8px] rounded-full bg-white opacity-80"
            style={{
              top: snow.top,
              left: snow.left,
              animation: snow.animationProps,
            }}
          ></div>
        )
      })}
    </div>
  )
}
