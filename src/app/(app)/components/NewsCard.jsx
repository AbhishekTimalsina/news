import { Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'

import Link from 'next/link'

export default function NewsCard({ id, title, summary, photo, date, paragraphs }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Image
        src={photo?.url}
        alt={title}
        width={200}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-center space-x-4 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Technology
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{paragraphs[0]?.text}</p>
        <Link
          href={`/article/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
