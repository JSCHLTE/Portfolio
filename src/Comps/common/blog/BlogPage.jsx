import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import AnimatedText from '../AnimatedText';
import FormatDate from '../FormatDate';
import { useBlogs } from '../../../hooks/useBlogs';
import { ref, runTransaction } from 'firebase/database';
import { database } from '../../../firebase';

const BlogPage = () => {
  const { blogs, loading } = useBlogs();
  const { slug } = useParams();

  const [checkLiked, setCheckLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const likedMap = JSON.parse(localStorage.getItem("blogLikes")) || {};
    if (likedMap[slug]) {
      setCheckLiked(true);
    }
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
      await runTransaction(blogRef, (blog) => {
        if (!blog) return blog;
        blog.likes = blog.likes || 0;
        blog.likes += isLiking ? 1 : -1;
        if (blog.likes < 0) blog.likes = 0;
        return blog;
      });

      // Update local state
      setLikes((prev) => Math.max(0, isLiking ? prev + 1 : prev - 1));
      setCheckLiked(isLiking);

      // Update localStorage
      const updatedLikes = { ...likedMap, [slug]: isLiking };
      localStorage.setItem("blogLikes", JSON.stringify(updatedLikes));

    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <div className='blogpage-wrapper'>
      <header>
        <h1><AnimatedText text={blog.title} /></h1>
        <div className='blogpage-meta'>
          <img src={blog.pfp} alt="Author Profile" />
          <div>
            <address>By {blog.author}</address>
            <time dateTime={blog.date}><FormatDate date={blog.date} /></time>
          </div>
        </div>
        <div className={`blogpage-likes ${checkLiked ? 'liked' : ''}`}>
          <button onClick={handleLike}>
            <i className={`${checkLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}></i> {likes}
          </button>
        </div>
      </header>
      <main className='blogpage-content'>
        <Markdown>{blog.content}</Markdown>
      </main>
    </div>
  );
};

export default BlogPage;
