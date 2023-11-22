'use client'
import '@/css/splash.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useTheme } from 'next-themes'

export default function SplashScreen() {
  const [height, setHeight] = useState<string>('h-0')
  const [opacity, setOpacity] = useState<string>('opacity-100')
  const [toShow, setToShow] = useState<boolean>(false)

  const { theme } = useTheme()

  const setCookie = () => {
    Cookies.set('Splashed', 'true', { expires: 1 })
  }

  useEffect(() => {
    // if (typeof Cookies.get('Splashed') != 'undefined') return
    setToShow(true)
    setTimeout(() => setHeight('h-full'), 500)
    setTimeout(() => setOpacity('opacity-0'), 1500)
    setTimeout(() => {
      setCookie()
      setToShow(false)
    }, 2200)
  }, [])

  return toShow ? (
    <div>
      <div
        className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white text-4xl text-black antialiased ${opacity} duration-1000 dark:bg-gray-950 dark:text-white sm:text-6xl md:text-9xl`}
      >
        <div className="relative flex h-12 w-full items-center sm:h-20 md:h-40">
          <div
            className={`${
              theme == 'dark' ? 'light-text-edge' : 'dark-text-edge'
            } dark:light-text-edge absolute z-10 flex h-full w-full items-center justify-center font-bold text-white dark:text-gray-950`}
          >
            LEtMeDEv
          </div>
          <div
            className={`transition-height   z-50 flex h-full w-full flex-col items-center justify-center  `}
          >
            <div
              className={`${
                theme == 'dark' ? 'light-line-shadow' : 'dark-line-shadow'
              }  h-[1px] w-[60%] bg-gray-400`}
            />
            <div
              className={`flex ${height} w-ful items-center justify-center overflow-hidden  font-bold duration-700 ease-linear`}
            >
              LEtMeDEv
            </div>
            <div
              className={`${
                theme == 'dark' ? 'light-line-shadow' : 'dark-line-shadow'
              }  h-[1px] w-[60%] bg-gray-400`}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null
}
