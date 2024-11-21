import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { Clock, Share2 } from 'lucide-react'
import { FormatDate } from '@/app/(app)/utils/utils'

export default async function ArticlePage({ params }) {
  let param = await params

  const payload = await getPayload({ config })

  const articleData = await payload.findByID({
    collection: 'News',
    id: param.articleId,
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {articleData.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {FormatDate(articleData.date)}
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">{articleData.title}</h1>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt={articleData.author}
                  className="h-10 w-10 rounded-full"
                />
                <span className="font-medium">{articleData.author}</span>
              </div>

              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </header>

          <Image
            src={articleData.photo.url}
            alt={articleData.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            {articleData.paragraphs.map((paragraph, index) => {
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph.text}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </div>
  )
}
