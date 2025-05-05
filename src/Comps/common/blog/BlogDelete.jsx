import React from 'react'

const BlogDelete = ({ setDeleteWarning, deleteBlog }) => {
  return (
    <div className='blog-delete-wrapper'>
        <div className='blog-delete-topbar'>
          <h3>Delete Blog</h3>
          <div className='blog-delete-icon' onClick={() => setDeleteWarning(false)}><i class="fa-solid fa-x"></i></div>
        </div>
        <div className='blog-delete-body'>
            <p>Are you sure you want to delete this blog?</p>
            <div className='blog-delete-buttons'>
                <button className='delete-yes' onClick={() => deleteBlog()}>Yes</button>
                <button className='delete-no' onClick={() => setDeleteWarning(false)}>No</button>
            </div>
        </div>
    </div>
  )
}

export default BlogDelete