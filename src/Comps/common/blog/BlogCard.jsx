import React from 'react'
import AnimatedText from '../AnimatedText'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.slug}`}>
    <article className='blog-item'>
        <div className='blog-info'>
          <h3 className='blog-title'><AnimatedText text={blog.title} /></h3>
          <p className='blog-snippet'>{blog.snippet}</p>
        </div>
        <div className='blog-meta'>
            <div className='blog-meta-left'>
              <img src="/images/pfp.webp" alt="Image of Jordan" className='blog-meta-pfp' />
              <span className='blog-meta-author'>{blog.author}</span>
            </div>
            <div className='blog-meta-right'>
              <i className="fa-regular fa-heart"></i>
              <span className='blog-meta-likes'>{blog.likes}</span>
            </div>
        </div>
    </article>
    </Link>
  )
}

export default BlogCard