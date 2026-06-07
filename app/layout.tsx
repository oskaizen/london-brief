import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The London Brief',
  description: 'Helping to Navigate Through the Storms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-100">
          <div className="max-w-wide mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold tracking-tight">
                The London Brief
              </Link>
              <div className="flex gap-8 text-sm">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="/past-briefs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Past Briefs
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-gray-100 mt-24">
          <div className="max-w-wide mx-auto px-6 py-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The London Brief
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
