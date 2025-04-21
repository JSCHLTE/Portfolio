import { useEffect } from 'react';
import '../CSS/blog.css'
import Bio from '../Comps/common/Bio'
import BlogCard from '../Comps/common/blog/BlogCard';
import { blogsData } from '../Comps/common/blog/blogsData'

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main className="blog-wrapper">
    <div className="blog-left">
      <Bio />
    </div>
    <div className="blog-right">
      <h1>Blogs</h1>
      <div className='blogs-wrapper'>
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  </main>
  )
}

export default Blog