import React from 'react'
import { blogData } from './blogData'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'

const BlogPage = () => {

  const { slug } = useParams()
  const blog = blogData.find((b) => b.slug === slug)

  if(!blog) return <div>Blog not found</div>

  return (
    <div className='blog-content'>
      <header>
      <h1>{blog.title}</h1>
        <div className='blog-meta'>
          <img src={blog.pfp} />
          <address>By {blog.author}</address>
          <time dateTime={blog.date}>{blog.date}</time>
        </div>
        <div className='blog-likes'>
          <button><i class="fa-regular fa-heart"></i> {blog.likes} likes</button>
        </div>
      </header>
      <main>
        <Markdown children={blog.content}></Markdown>
      </main>
    </div>
  )
}

export default BlogPage