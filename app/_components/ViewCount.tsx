'use client'
import { useEffect, useState } from 'react'

type Props = {
  slug: string
}
const MainPostPreview = ({ slug }: Props) => {
  const [viewCount, setViewCount] = useState(0)
  useEffect(() => {
    const fetchViews = async () => {
      const data = await (await fetch(`/api/views/${slug.split('/').at(-1)}`)).json()
      setViewCount(data != null ? data.views : 0)
    }
    fetchViews()
  }, [])
  console.log(viewCount)
  return <div className="text-right text-gray-500 dark:text-gray-400">{`views: ${viewCount}`}</div>
}
export default MainPostPreview
