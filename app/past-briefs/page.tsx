import Link from 'next/link'
import Image from 'next/image'
import { getAllNewsletters } from '@/lib/newsletters'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  })
}

export default function PastBriefs() {
  const newsletters = getAllNewsletters()

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-wide mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16 text-center">Past Briefs</h1>

        {newsletters.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No newsletters yet. Add markdown files to /content/newsletters/</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsletters.map((newsletter) => (
              <article key={newsletter.slug} className="group">
                <Link href={`/briefs/${newsletter.slug}`}>
                  {/* Image (if available) */}
                  {newsletter.image && (
                    <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={newsletter.image}
                        alt={newsletter.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Date */}
                  <time className="text-sm text-gray-500 block mb-3">
                    {formatDate(newsletter.date)}
                  </time>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                    {newsletter.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {newsletter.excerpt}
                  </p>

                  {/* Read More Link */}
                  <span className="text-gray-900 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read full story
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
