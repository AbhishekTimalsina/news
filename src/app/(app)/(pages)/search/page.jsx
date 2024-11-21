import { getPayload } from 'payload'
import config from '@payload-config'
import NewsCardV2 from '@/app/(app)/components/NewsCardV2'
import { redirect } from 'next/navigation'

export default async function SearchPage({ searchParams }) {
  let searchParam = await searchParams

  const payload = await getPayload({ config })

  console.log(searchParam)

  if (!searchParam.query) {
    redirect('/')
  }

  const SearchNews = await payload.find({
    collection: 'News',
    where: {
      or: [
        {
          title: {
            contains: searchParam.query,
          },
        },
        {
          category: {
            contains: searchParam.query,
          },
        },
      ],
    },
  })

  return (
    <main className="container mx-auto py-4 px-10 space-y-10">
      <h2 className="text-3xl font-bold capitalize">Search Result: {searchParam.query}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {SearchNews.totalDocs !== 0 ? (
          SearchNews.docs.map((news) => <NewsCardV2 articleData={news} />)
        ) : (
          <div className="text-2xl font-semibold text-center col-span-full">No Result Found</div>
        )}
      </div>
    </main>
  )
}
