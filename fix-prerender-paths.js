import fs from 'fs'
import path from 'path'
import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

const outDir = 'static-pages'

const client = createClient({
  projectId: 'rgpf9esn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = createImageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

// Step 1: Fix nested blog post paths (blog-slug -> blog/slug)
const entries = fs.readdirSync(outDir, { withFileTypes: true })

for (const entry of entries) {
  if (entry.isDirectory() && entry.name.startsWith('blog-')) {
    const slug = entry.name.replace(/^blog-/, '')
    const srcDir = path.join(outDir, entry.name)
    const destDir = path.join(outDir, 'blog', slug)

    fs.mkdirSync(destDir, { recursive: true })

    const srcFile = path.join(srcDir, 'index.html')
    const destFile = path.join(destDir, 'index.html')

    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, destFile)
      console.log(`✅ Moved ${entry.name}/index.html → blog/${slug}/index.html`)
    }

    fs.rmSync(srcDir, { recursive: true })
  }
}

// Step 2: Inject SEO meta tags into blog post pages
async function injectBlogPostMeta() {
  try {
    const posts = await client.fetch(
      `*[_type == "post"]{ title, excerpt, "slug": slug.current, mainImage, seo }`
    )

    for (const post of posts) {
      const filePath = path.join(outDir, 'blog', post.slug, 'index.html')

      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  No HTML file for blog/${post.slug}`)
        continue
      }

      let html = fs.readFileSync(filePath, 'utf-8')
      const title = post.seo?.metaTitle || post.title
      const description = post.seo?.metaDescription || post.excerpt || post.title
      const ogImage = post.mainImage
        ? urlFor(post.mainImage).width(1200).height(630).url()
        : null

      // Replace the default title
      html = html.replace(
        /<title>.*?<\/title>/,
        `<title>${escapeHtml(title)} | Jumpwag Blog</title>`
      )

      // Remove any existing duplicate titles
      const titleTag = `<title>${escapeHtml(title)} | Jumpwag Blog</title>`
      const titleCount = (html.match(/<title>/g) || []).length
      if (titleCount > 1) {
        let first = true
        html = html.replace(/<title>.*?<\/title>/g, (match) => {
          if (first) {
            first = false
            return titleTag
          }
          return ''
        })
      }

      // Replace the default meta description
      html = html.replace(
        /<meta name="description" content="[^"]*">/,
        `<meta name="description" content="${escapeAttr(description)}">`
      )

      // Add noindex if set
      if (post.seo?.noIndex) {
        html = html.replace('</head>', `    <meta name="robots" content="noindex">\n  </head>`)
      }

      // Build SEO meta tags
      const seoTags = [
        `<meta property="og:title" content="${escapeAttr(title)}">`,
        `<meta property="og:description" content="${escapeAttr(description)}">`,
        `<meta property="og:type" content="article">`,
        ogImage ? `<meta property="og:image" content="${ogImage}">` : '',
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${escapeAttr(title)}">`,
        `<meta name="twitter:description" content="${escapeAttr(description)}">`,
        ogImage ? `<meta name="twitter:image" content="${ogImage}">` : '',
      ]
        .filter(Boolean)
        .join('\n    ')

      // Inject before </head>
      html = html.replace('</head>', `    ${seoTags}\n  </head>`)

      fs.writeFileSync(filePath, html)
      console.log(`✅ Injected SEO meta for: ${post.title}`)
    }
  } catch (error) {
    console.warn('⚠️  Could not fetch posts for meta injection:', error.message)
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

await injectBlogPostMeta()
