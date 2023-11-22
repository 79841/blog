'use client'

import { useEffect, useState } from 'react'

type TProps = {
  slug: string
}

const ViewCount = ({ slug }: TProps) => {
  const title = slug.split('/').at(-1)

  const [viewCount, setViewCount] = useState(0)

  useEffect(() => {
    const fetchViews = async () => {
      const data = await (await fetch(`/api/views/${title}`)).json()
      setViewCount(data != null ? data.views : 0)
    }
    fetchViews()
  })
  return <div className="flex items-center justify-end">{`${viewCount} views`}</div>
}

export default ViewCount
