import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rgpf9esn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default async function () {
  let blogRoutes = []

  try {
    const posts = await client.fetch(
      `*[_type == "post"]{ "slug": slug.current }`
    )
    blogRoutes = posts.map((post) => `/blog/${post.slug}`)
  } catch (error) {
    console.warn('⚠️  Could not fetch blog posts from Sanity:', error.message)
  }

  return {
    routes: [
      '/',
      '/blog',
      '/terms',
      '/privacy',
      '/refund-policy',
      ...blogRoutes,
    ],
    outDir: 'static-pages',
    serveDir: 'dist',
    buildCommand: 'npm run build',
  }
}
