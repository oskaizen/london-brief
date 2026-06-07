import { notFound } from 'next/navigation'
import { getAllNewsletters, getNewsletterBySlug } from '@/lib/newsletters'
import { markdownToHtml } from '@/lib/markdown'
import Image from 'next/image'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  })
}

export async function generateStaticParams() {
  const newsletters = getAllNewsletters()
  return newsletters.map((newsletter) => ({
    slug: newsletter.slug,
  }))
}

export default async function NewsletterPage({ params }: { params: { slug: string } }) {
  const newsletter = getNewsletterBySlug(params.slug)

  if (!newsletter) {
    notFound()
  }

  const contentHtml = await markdownToHtml(newsletter.content)

  return (
    <main className="min-h-screen py-24">
      <article className="max-w-content mx-auto px-6">
        {/* Header */}
        <header className="mb-12">
          <time className="text-sm text-gray-500 block mb-4">
            {formatDate(newsletter.date)}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {newsletter.title}
          </h1>
          {newsletter.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-8">
              <Image
                src={newsletter.image}
                alt={newsletter.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <a 
            href="/past-briefs"
            className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all briefs
          </a>
        </footer>
      </article>
    </main>
  )
}
