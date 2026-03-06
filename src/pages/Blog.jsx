import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import { client, urlFor } from '../sanityClient'

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage
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
                    src={urlFor(post.mainImage).width(600).height(340).url()}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
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
