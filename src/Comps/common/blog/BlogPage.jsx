import React, { useState } from 'react'
import { blogData } from './blogData'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import AnimatedText from '../AnimatedText'

const BlogPage = () => {

  const { slug } = useParams()
  const blog = blogData.find((b) => b.slug === slug)

  if(!blog) return <div>Blog not found</div>

  const [isHovered, setIsHovered] = useState(false);

  const [year, month, day] = blog.date.split("-");
  const localDate = new Date(year, month - 1, day);


  return (
    <div className='blogpage-wrapper'>
      <header>
      <h1>{<AnimatedText text={blog.title}/>}</h1>
        <div className='blogpage-meta'>
          <img src={blog.pfp} />
          <div>
            <address>By {blog.author}</address>
            <time dateTime={blog.date}> {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }).format(localDate)}</time>
          </div>
        </div>
        <div className='blogpage-likes'>
          <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><i className={`${isHovered ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}></i> {blog.likes}</button>
        </div>
      </header>
      <main className='blogpage-content'>
        <Markdown children={blog.content}></Markdown>
      </main>
    </div>
  )
}

export default BlogPage