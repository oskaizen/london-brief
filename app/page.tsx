import BrevoForm from './components/BrevoForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">

        {/* Logo / Title */}
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          The London Brief
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-600 font-light mb-12">
          Helping to Navigate Through the Storms
        </p>

        {/* Brevo Signup Form */}
        <div className="max-w-md mx-auto">
          <BrevoForm />
        </div>

        {/* CTA to Past Briefs */}
        <div className="mt-12">
          <a
            href="/past-briefs"
            className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
          >
            Read Recent Briefs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  )
}