import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/newsletters')

export interface Newsletter {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image?: string
}

export function getAllNewsletters(): Newsletter[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allNewsletters = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        content,
        image: data.image,
      }
    })

  // Sort newsletters by date (newest first)
  return allNewsletters.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getNewsletterBySlug(slug: string): Newsletter | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || '',
      content,
      image: data.image,
    }
  } catch (error) {
    return null
  }
}
