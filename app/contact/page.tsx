export default function Contact() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-8">Contact</h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Questions or feedback? Get in touch.
        </p>

        <div className="space-y-6">
          <a 
            href="mailto:osayed@thelondonbrief.com"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Send Email
          </a>
          
          {/* Optional: Add social links */}
          {/* <div className="flex justify-center gap-6 mt-8">
            <a href="https://twitter.com/yourhandle" className="text-gray-600 hover:text-gray-900">
              Twitter
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>
          </div> */}
        </div>
      </div>
    </main>
  )
}
