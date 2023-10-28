// import { useRef } from "react"
'use client'
import { useEffect, useState } from 'react'

const style = {
  textShadow: ' -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white',
}

const style2 = {
  // boxShadow: '0px 0px 133px 0px rgba(227, 216, 216, 0.75)',
}

export default function SplashScreen() {
  const [height, setHeight] = useState('h-0')
  useEffect(() => {
    setTimeout(() => setHeight('h-full'), 500)
  }, [])

  // const ref = useRef(second)
  return (
    <div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white text-4xl text-black antialiased duration-1000 dark:bg-gray-950 dark:text-white sm:text-6xl md:text-9xl">
        <div className="relative flex h-12 w-full items-center sm:h-20 md:h-40">
          <div
            className={`absolute z-10 flex h-full w-full items-center justify-center font-bold dark:text-gray-950`}
            style={style}
          >
            hello
          </div>
          <div
            className={`absolute left-[50%] top-[50%] z-50 flex translate-x-[-50%] translate-y-[-50%] ${height} transition-height w-full items-center justify-center overflow-hidden bg-red-900 font-bold duration-700 ease-linear`}
            style={style2}
          >
            <div className="absolute top-0 h-[10px] w-full bg-gray-400" />
            hello
            <div className="absolute bottom-0 h-[10px] w-full bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
