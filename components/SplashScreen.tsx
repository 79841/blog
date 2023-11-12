'use client'
import '@/css/splash.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useTheme } from 'next-themes'

const viewCountIncreasingTime = 2000
const lineAppearingTime = 500
const hFullDelay = viewCountIncreasingTime + lineAppearingTime
const logoAppearingTime = 700
// const transparentingDelay = 1500
const disappearingDelay = 3200

const screenDisappearingTime = 1000

type TTotalViewsProps = {
  totalViews: number
}
const TotalViews = ({ totalViews }: TTotalViewsProps) => {
  const countOfNumberToShow = 20
  const [increasingNumber, setIncreasingNumber] = useState(totalViews - countOfNumberToShow)
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      setIncreasingNumber((prev) => prev + 1)
      count += 1
      if (count === countOfNumberToShow) clearInterval(interval)
    }, viewCountIncreasingTime / countOfNumberToShow)
  }, [])

  return (
    <div>
      <span>{`${increasingNumber}`}</span>
      <span className="text- sm:text-6xl md:text-9xl">views</span>
    </div>
  )
}

export default function SplashScreen() {
  const [height, setHeight] = useState<string>('h-0')
  const [opacity, setOpacity] = useState<string>('opacity-100')
  const [toShow, setToShow] = useState<boolean>(false)
  const [totalViews, setTotalViews] = useState(0)
  const [lineOpacity, setLineOpacity] = useState('opacity-0')
  const [lineWidth, setLineWidth] = useState('w-0')

  const { theme } = useTheme()

  const setCookie = () => {
    Cookies.set('Splashed', 'true', { expires: 1 })
  }

  useEffect(() => {
    // if (typeof Cookies.get('Splashed') != 'undefined') return
    const fetchTotalViews = async () => {
      const { views } = await (await fetch('/api/views')).json()
      setTotalViews(views)
      setToShow(true)
    }
    fetchTotalViews()
    setTimeout(() => setHeight('h-full'), hFullDelay)
    setTimeout(() => setOpacity('opacity-0'), disappearingDelay)
    setTimeout(() => {
      setLineWidth('w-full')
      setLineOpacity('opacity-100')
    }, viewCountIncreasingTime)
    setTimeout(() => {
      setCookie()
      setToShow(false)
    }, disappearingDelay)
  }, [])

  return toShow ? (
    <div>
      <div
        className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-white text-4xl text-black antialiased ${opacity} duration-${screenDisappearingTime} dark:bg-gray-950 dark:text-white sm:text-6xl md:text-9xl`}
      >
        <div className="relative flex h-12 w-full items-center justify-center sm:h-20 md:h-40">
          {/* <div
            className={`${
              theme == 'dark' ? 'light-text-edge' : 'dark-text-edge'
            } dark:light-text-edge absolute z-10 flex h-full w-full items-center justify-center font-bold text-white dark:text-gray-950`}
          >
          LEtMeDEv
          </div> */}
          <div
            className={`absolute z-10 flex h-full w-full items-center justify-center font-bold text-gray-950  dark:text-white`}
          >
            <TotalViews totalViews={totalViews} />
          </div>
          <div
            className={`transition-height z-50 flex h-full w-[60%] flex-col items-center justify-center `}
          >
            <div
              className={`${
                theme == 'dark' ? 'light-line-shadow' : 'dark-line-shadow'
              }  z-10 h-[1px] ${lineWidth} bg-white duration-500 ease-linear ${lineOpacity}`}
            />
            <div
              className={`flex ${height} w-ful items-center justify-center overflow-hidden bg-white font-bold duration-${logoAppearingTime} ease-linear dark:bg-gray-950`}
            >
              LEtMeDEv
            </div>
            <div
              className={`${
                theme == 'dark' ? 'light-line-shadow' : 'dark-line-shadow'
              }  z-10 h-[1px] ${lineWidth} bg-white duration-500 ease-linear ${lineOpacity}`}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null
}
