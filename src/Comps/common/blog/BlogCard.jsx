import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <article className='blog-item'>
        <h3 className='blog-title'>{blog.title}</h3>
        <p className='blog-snippet'>{blog.snippet}</p>
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
  )
}

export default BlogCard