import { useState } from 'react';
import BlogDelete from '../Comps/common/blog/BlogDelete';
import Overlay from '../Comps/common/Overlay';
import BlogCard from '../Comps/common/blog/BlogCard';
import AnimatedText from '../utils/AnimatedText';
import '../CSS/blog.css'

const Blog = () => {

  return (
    <>
      <div className="blog-wrapper">
        <h1><AnimatedText text='Blogs' /></h1>
        <div className='blogs-wrapper'>
          <BlogCard />
        </div>
    </div>
  </>
  )
}

export default Blog