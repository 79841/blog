'use client'

import { useEffect } from 'react'

export default function ViewCountIncreaser({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  useEffect(() => {
    const increaseViewCount = async () => {
      // try {
      //   console.log('hello')
      //   const res = await fetch(`/api/views/${title}`, {
      //     method: 'POST',
      //   })
      // } catch (e) {
      //   console.log(e)
      // }

      const views = await (await fetch(`/api/views/${title}`)).json()
      console.log(views)
      console.log(title)
      if (views === null) {
        await fetch(`/api/views/${title}`, {
          method: 'POST',
        })
      }
      await fetch(`/api/views/${title}`, {
        method: 'PATCH',
      })
    }
    increaseViewCount()
  }, [])

  return <>{children}</>
}
