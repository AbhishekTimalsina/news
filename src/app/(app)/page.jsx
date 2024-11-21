import { getPayload } from 'payload'
import config from '@payload-config'

import NewsCard from './components/NewsCard'
import NewsCardV2 from './components/NewsCardV2'
import MainArticle from './components/MainArticle'
import BusinessNewsCard from './components/BusinessNewsCard'

export default async function Home() {
  const payload = await getPayload({ config })
  const breakingNews = await payload.find({
    collection: 'News',
    where: {
      isBreaking: {
        equals: true,
      },
    },
  })

  const remainingBreakingNews = breakingNews.docs
  const mainArticle = remainingBreakingNews.shift()

  let latestNews = await payload.find({
    collection: 'News',
    where: {
      isBreaking: {
        not_equals: true,
      },
    },
  })
  latestNews = latestNews.docs

  return (
    <main className="container mx-auto py-4 px-10 space-y-10">
      <section className=" grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-4">
          <MainArticle articleData={mainArticle} />
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            {remainingBreakingNews.reverse().map((news) => (
              <BusinessNewsCard articleData={news} />
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {latestNews.map((news) => (
            <NewsCardV2 articleData={news} />
          ))}
        </div>
      </section>
    </main>
  )
}
