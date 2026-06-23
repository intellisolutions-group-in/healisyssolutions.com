declare global {
  interface IBlog {
    id: number
    slug: string
    title: string
    category: string
    excerpt: string
    image: string
    author: string
    publishedDate: string
    readTime: string
    content: string
  }
}

export {}
