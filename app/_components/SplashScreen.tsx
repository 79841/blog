'use client'
import { useSplashCheckerStore } from 'lib/zustand/splashChecker'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function SplashScreen() {
  const [opacity, setOpacity] = useState('opacity-100')
  const { splashed, setTrue } = useSplashCheckerStore()

  useEffect(() => {
    setTimeout(() => setOpacity('opacity-0'), 2000)
    setTimeout(() => setTrue(), 3000)
  })

  if (splashed) return null

  return (
    <div
      className={`${opacity} fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white text-4xl text-black antialiased duration-1000 dark:bg-gray-950 dark:text-white sm:text-6xl md:text-9xl`}
    >
      <TypeAnimation
        sequence={[
          'LEtMeDEv', // Types 'Three' without deleting 'Two'
          () => {
            console.log('Sequence completed')
          },
        ]}
        wrapper="span"
        cursor={true}
        //   repeat={Infinity}
        // style={{ fontSize: '2rem', display: 'inline-block' }}
        // #4cdde8
        className="text-2xl font-normal text-black dark:text-white sm:text-3xl md:text-4xl"
      />
    </div>
  )
}
