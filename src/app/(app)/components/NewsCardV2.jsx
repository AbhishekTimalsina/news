import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { FormatDate } from '../utils/utils'

export default function NewsCardV2({ articleData }) {
  return (
    <div className="max-w-2xl rounded-lg overflow-hidden ">
      <div className="relative">
        <Image
          src={articleData.photo.url}
          alt="Presidential address"
          width={600}
          height={400}
          className="w-full h-[280px] object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-md">
          {articleData.category}
        </span>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{FormatDate(articleData.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{Math.round(articleData.readTime)} Minute</span>
          </div>
        </div>
        <Link href={`/article/${articleData.id}`} className="block">
          <h2 className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
            {articleData.title}
          </h2>
        </Link>
      </div>
    </div>
  )
}
