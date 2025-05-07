import { useState } from 'react';
import BlogDelete from '../Comps/common/blog/BlogDelete';
import Overlay from '../Comps/common/Overlay';
import BlogCard from '../Comps/common/blog/BlogCard';
import AnimatedText from '../utils/AnimatedText';
import '../CSS/blog.css'

const Blog = ({ user }) => {

  const [deleteWarning, setDeleteWarning] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const deleteWarn = (slug) => {
    setBlogToDelete(slug);
    setDeleteWarning(true);
  }

  return (
    <>
    {deleteWarning && user ? <BlogDelete setDeleteWarning={setDeleteWarning} deleteBlog={blogToDelete}/> : ''}
    {deleteWarning && user ? <Overlay setDeleteWarning={setDeleteWarning} /> : ''}
      <div className="blog-wrapper">
        <h1><AnimatedText text='Blogs' /></h1>
        <div className='blogs-wrapper'>
          <BlogCard user={user} deleteWarn={deleteWarn}/>
        </div>
    </div>
  </>
  )
}

export default Blog