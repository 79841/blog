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
      const views = await (await fetch(`/api/views/${title}`)).json()
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
