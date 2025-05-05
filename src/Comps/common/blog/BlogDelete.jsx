import React from 'react'
import { ref, remove } from 'firebase/database';
import { database } from '../../../firebase';
import { useBlogs } from '../../../hooks/useBlogs';

const BlogDelete = ({ setDeleteWarning, deleteBlog }) => {
  const { refresh } = useBlogs();

  const handleDelete = async () => {
    try {
      const blogRef = ref(database, `blogs/${deleteBlog}`);
      await remove(blogRef);
      await refresh(); // Refresh the blog list
      setDeleteWarning(false);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  }

  return (
    <div className='blog-delete-wrapper'>
        <div className='blog-delete-topbar'>
          <h3>Delete Blog</h3>
          <div className='blog-delete-icon' onClick={() => setDeleteWarning(false)}><i className="fa-solid fa-x"></i></div>
        </div>
        <div className='blog-delete-body'>
            <p>Are you sure you want to delete this blog?</p>
            <div className='blog-delete-buttons'>
                <button className='delete-yes' onClick={handleDelete}>Yes</button>
                <button className='delete-no' onClick={() => setDeleteWarning(false)}>No</button>
            </div>
        </div>
    </div>
  )
}

export default BlogDelete