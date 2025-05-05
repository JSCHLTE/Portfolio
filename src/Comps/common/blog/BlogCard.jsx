import React from 'react'
import AnimatedText from '../AnimatedText'
import { Link } from 'react-router-dom'
import FormatDate from '../FormatDate';
import { useBlogs } from '../../../hooks/useBlogs';
import { ref, remove } from 'firebase/database';
import { database } from '../../../firebase';

const BlogCard = ({ user, deleteWarn }) => {

  const { blogs, loading } = useBlogs();
  if (loading) return <p>Loading...</p>;

  const handleDelete = (event, slug) => {
    event.preventDefault();
    event.stopPropagation();
    deleteWarn(slug);
  }

  return (
    <>
    {blogs.map((blog) => (
      <Link className='blog-link' to={`/blogs/${blog.slug}`} key={blog.slug}>
      <article className='blog-item'>
      { user ? <div className='blog-delete' onClick={(e) => handleDelete(e, blog.slug)}><i className="fa-solid fa-trash"></i></div> : '' }
          <div className='blog-info'>
            <h3 className='blog-title'><AnimatedText text={blog.title} /></h3>
            <p className='blog-snippet'>{blog.snippet}</p>
          </div>
          <div className='blog-meta'>
              <div className='blog-meta-left'>
                <img src="/images/pfp.webp" alt="Image of Jordan" className='blog-meta-pfp' />
                <div className='blog-meta-author-wrapper'>
                  <span className='blog-meta-author'>{blog.author}</span>
                  <time dateTime={blog.date}>{<FormatDate date={blog.date}/>}</time>
                </div>
              </div>
              <div className='blog-meta-right'>
                <i className="fa-regular fa-heart"></i>
                <span className='blog-meta-likes'>{blog.likes}</span>
              </div>
          </div>
      </article>
      </Link>
    ))}</>
  )
}

export default BlogCard