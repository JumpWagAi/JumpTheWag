import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../Navbar'
import { client, urlFor } from '../sanityClient'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  publishedAt,
  mainImage,
  body
}`

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(POST_QUERY, { slug }).then((data) => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center">
        <p className="text-neutral-light/50">Loading...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-void flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-light/50 text-lg">Post not found</p>
        <Link to="/blog" className="text-accent hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-void">
      <Navbar />

      {/* Post */}
      <article className="px-6 lg:px-20 py-12 max-w-4xl mx-auto">
        <p className="text-neutral-light/40 text-sm mb-4">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-default mb-8 leading-tight">
          {post.title}
        </h1>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            className="w-full rounded-2xl mb-10 object-cover max-h-[500px]"
          />
        )}

        {/* Render body blocks */}
        <div className="prose prose-invert max-w-none">
          {post.body?.map((block, index) => {
            if (block._type === 'block') {
              const text = block.children?.map((child) => child.text).join('') || ''

              switch (block.style) {
                case 'h1':
                  return <h1 key={index} className="text-3xl font-bold text-text-default mt-8 mb-4">{text}</h1>
                case 'h2':
                  return <h2 key={index} className="text-2xl font-bold text-text-default mt-8 mb-4">{text}</h2>
                case 'h3':
                  return <h3 key={index} className="text-xl font-semibold text-text-default mt-6 mb-3">{text}</h3>
                case 'blockquote':
                  return <blockquote key={index} className="border-l-4 border-accent pl-4 italic text-neutral-light/70 my-4">{text}</blockquote>
                default:
                  return text ? <p key={index} className="text-neutral-light/80 leading-relaxed mb-4">{text}</p> : null
              }
            }

            if (block._type === 'image') {
              return (
                <img
                  key={index}
                  src={urlFor(block).width(1200).url()}
                  alt={block.alt || ''}
                  className="w-full rounded-xl my-6"
                />
              )
            }

            return null
          })}
        </div>
      </article>
    </div>
  )
}

export default BlogPost
