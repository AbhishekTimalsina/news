import { getPayload } from 'payload'
import config from '@payload-config'

import NewsCard from './components/NewsCard'

export default async function Home() {
  const payload = await getPayload({ config })
  const newsArticle = await payload.find({
    collection: 'News',
  })

  const featuredNews = newsArticle.docs

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Breaking News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <button className="text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.reverse().map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
