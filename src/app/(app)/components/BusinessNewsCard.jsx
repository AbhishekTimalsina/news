import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BusinessNewsCard({ articleData }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 space-y-4">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={articleData?.photo.url}
            alt="Business meeting"
            className="object-cover"
            fill
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-sm font-semibold rounded">
            {articleData?.category}
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{articleData?.title}</h2>
          <Link
            href={`/article/${articleData?.id}`}
            className="inline-flex items-center text-blue-600 font-semibold hover:underline"
          >
            Read News
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
