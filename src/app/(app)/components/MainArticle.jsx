import Image from 'next/image'
import Link from 'next/link'
import { FormatDate } from '../utils/utils'
import { ChevronRight } from 'lucide-react'

export default function MainArticle({ articleData }) {
  const formattedDate = FormatDate(articleData?.date)

  return (
    <article className="space-y-4">
      <div className="relative aspect-[2] overflow-hidden rounded-lg">
        <Image
          src={articleData?.photo.url}
          alt="St. Peter's Basilica"
          className="object-cover"
          fill
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-sm font-semibold rounded">
          {articleData?.category}
        </span>
      </div>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{Math.round(articleData?.readTime)} Minute</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold leading-tight lg:text-4xl">{articleData?.title}</h1>
      <Link
        href={`/article/${articleData?.id}`}
        className="inline-flex items-center text-blue-600 font-semibold hover:underline"
      >
        Read News
        <ChevronRight className="h-5 w-5 ml-1" />
      </Link>
    </article>
  )
}
