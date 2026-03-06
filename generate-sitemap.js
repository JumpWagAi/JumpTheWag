import fs from 'fs'
import { createClient } from '@sanity/client'

const SITE_URL = 'https://www.jumpwag.com'

const client = createClient({
  projectId: 'rgpf9esn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const staticRoutes = ['/', '/blog', '/terms', '/privacy', '/refund-policy']

async function generateSitemap() {
  let blogRoutes = []

  try {
    const posts = await client.fetch(
      `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt,
        seo
      }`
    )

    blogRoutes = posts
      .filter((post) => !post.seo?.noIndex)
      .map((post) => ({
        url: `/blog/${post.slug}`,
        lastmod: post.publishedAt?.split('T')[0],
      }))
  } catch (error) {
    console.warn('⚠️  Could not fetch posts for sitemap:', error.message)
  }

  const urls = [
    ...staticRoutes.map((route) => ({ url: route })),
    ...blogRoutes,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod }) =>
      `  <url>
    <loc>${SITE_URL}${url}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`

  fs.writeFileSync('dist/sitemap.xml', sitemap)
  console.log(`✅ Sitemap generated with ${urls.length} URLs`)
}

generateSitemap()
