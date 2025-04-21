import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <article className='blog-item'>
        <h3>{blog.title}</h3>
        <p>{blog.snippet}</p>
        <div className='blog-meta'>
            <div className='blog-meta-left'>
                <img src="/images/pfp.webp" alt="Image of Jordan" />
                <span>{blog.author}</span>
            </div>
            <div className='blog-meta-right'>
                {blog.likes}
            </div>
        </div>
    </article>
  )
}

export default BlogCard