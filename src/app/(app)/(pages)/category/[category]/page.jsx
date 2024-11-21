import { getPayload } from 'payload'
import config from '@payload-config'
import NewsCardV2 from '@/app/(app)/components/NewsCardV2'

export default async function CategoryPage({ params }) {
  const param = await params

  const payload = await getPayload({ config })

  let categorizedNews = await payload.find({
    collection: 'News',
    where: {
      category: {
        equals: capitalizeFirstLetter(param.category),
      },
    },
  })

  if (categorizedNews.totalDocs === 0) {
    return <h1 className="mt-10 text-center font-bold text-3xl">Unknown Category</h1>
  }

  return (
    <main className="container mx-auto py-4 px-10 space-y-10">
      <h2 className="text-3xl font-bold capitalize">{param.category} News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {categorizedNews.docs.map((news) => (
          <NewsCardV2 articleData={news} />
        ))}
      </div>
    </main>
  )
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
