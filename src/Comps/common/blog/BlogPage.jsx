import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import AnimatedText from '../../../utils/AnimatedText';
import FormatDate from '../../../utils/FormatDate';
import { useBlogs } from '../../../hooks/useBlogs';
import { get, ref, update } from 'firebase/database';
import { database } from '../../../firebase';
import BlogDelete from './BlogDelete';

const BlogPage = ({ user }) => {
  const { blogs, loading } = useBlogs();
  const { slug } = useParams();
  const [deleteWarn, setDeleteWarn] = useState(null)
  const [blogEdit, setBlogEdit] = useState(null)
  const [blogEdits, setBlogEdits] = useState({
    title: '',
    content: ''
  })

  const [checkLiked, setCheckLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const likedMap = JSON.parse(localStorage.getItem("blogLikes")) || {};
    if (likedMap[slug]) {
      setCheckLiked(true);
    }
  }, [slug]);

  useEffect(() => {
    const path = `blogs/${slug}`;
    const blogRef = ref(database, path);
    get(blogRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("✅ BLOG EXISTS at", path, snapshot.val());
      } else {
        console.error("❌ BLOG DOES NOT EXIST at", path);
      }
    });
  }, [slug]);

  useEffect(() => {
    if (!loading) {
      const blog = blogs.find((b) => b.slug === slug);
      if (blog) {
        setLikes(blog.likes || 0);
      }
    }
  }, [loading, blogs, slug]);

  if (loading) return <p>Loading...</p>;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <div>Blog not found</div>;


  const handleLike = async () => {
    const blogRef = ref(database, `blogs/${slug}`);
    const likedMap = JSON.parse(localStorage.getItem("blogLikes")) || {};
    const alreadyLiked = likedMap[slug] === true;
    const isLiking = !alreadyLiked;

    try {
      await update(blogRef, { 
        likes: isLiking ? likes + 1 : Math.max(0, likes - 1)
      });

      // Update local state
      setLikes((prev) => Math.max(0, isLiking ? prev + 1 - 1 : prev - 1));
      setCheckLiked(isLiking);

      // Update localStorage
      const updatedLikes = { ...likedMap, [slug]: isLiking };
      localStorage.setItem("blogLikes", JSON.stringify(updatedLikes));

    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };
  
  const handleDel = () => {
    setDeleteWarn(true);
  }

  const handleEdit = () => {
    setBlogEdit(true)
    setBlogEdits({
      title: blog.title,
      content: blog.content
    })
  }

  const handleSave = async () => {
    const blogRef = ref(database, `blogs/${slug}`);

    try {
      await update(blogRef, { 
        title: blogEdits.title,
        content: blogEdits.content
      });

      setBlogEdit(null)
    }

    catch (error) {
      console.error("Error updating blog post:", error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setBlogEdits((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  

  return (
    <div className='blogpage-wrapper'>
      { user && deleteWarn ? <BlogDelete setDeleteWarning={setDeleteWarn} deleteBlog={slug}/> : ''}
      <header>
        {!blogEdit ? <h1><AnimatedText text={blog.title} /></h1> : 
          <input value={blogEdits.title} name='title' className='blogpage-edit-input' onChange={handleChange}/>
        }
        <div className='blogpage-meta'>
          <img src={blog.pfp} alt="Author Profile" />
          <div>
            <address className='blogpage-author'>By <span>{blog.author}</span></address>
            <time dateTime={blog.date} className='blogpage-date'><FormatDate date={blog.date} /></time>
          </div>
        </div>
        <div className='blogpage-meta-buttons'>
        {/* <div className={`blogpage-likes ${checkLiked ? 'liked' : ''}`}>
          <button onClick={handleLike} className="button-press">
            <i className={`${checkLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}></i> {likes}
          </button>
        </div> */}
        {user ?         <div className='blogpage-meta-buttons-admin'>
          {blogEdit ?         <button className="button-press blog-save" onClick={handleSave}>
          <i class="fa-solid fa-floppy-disk"></i>
          </button> :         <button className="button-press blog-edit" onClick={handleEdit}>
          <i class="fa-solid fa-pen-to-square"></i>
          </button>}

          <button className="button-press blog-delete" onClick={handleDel}>
          <i class="fa-solid fa-trash-can"></i>
          </button>
        </div> : ''}
        </div>
      </header>
      <main className='blogpage-content'>
        {!blogEdit ? <Markdown>{blog.content}</Markdown> : 
          <textarea className='blogpage-edit-textarea' name='content' onChange={handleChange} value={blogEdits.content}></textarea>
        }
      </main>
    </div>
  );
};

export default BlogPage;
