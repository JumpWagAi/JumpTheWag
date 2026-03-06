import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Navbar'
import { client, urlFor, urlForWithVanity } from '../sanityClient'

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories[]->{ _id, title, slug }
}`

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(POSTS_QUERY).then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="min-h-screen bg-void">
      <Helmet>
        <title>Blog | Jumpwag — Tips, Trends & Insights for Creators</title>
        <meta name="description" content="Tips, trends, and insights for creators. Stay ahead with the latest content strategies for TikTok, Instagram, and YouTube." />
        <meta property="og:title" content="Blog | Jumpwag" />
        <meta property="og:description" content="Tips, trends, and insights for creators." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      {/* Content */}
      <main className="px-6 lg:px-20 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-neutral-light/60 mb-12 max-w-lg">
          Tips, trends, and insights for creators.
        </p>

        {loading ? (
          <p className="text-neutral-light/50">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-neutral-light/50">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug?.current}`}
                className="group preview-card rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                {post.mainImage && (
                  <img
                    src={urlForWithVanity(post.mainImage, post.mainImage.vanityFilename).width(600).height(340).url()}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  {post.categories?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.categories.map((cat) => (
                        <span key={cat._id} className="bg-accent/10 text-accent text-xs font-semibold px-2 py-0.5 rounded-full">
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-neutral-light/40 text-xs mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <h2 className="text-text-default font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-neutral-light/60 text-sm line-clamp-3">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Blog
