import React, { useState } from 'react';
import AnimatedText from '../AnimatedText';
import '../../../CSS/form.css';
import { ref, set } from 'firebase/database';
import { database } from '../../../firebase';
import { slugify } from '../../../utils/slugify'; // make sure this exists!

const BlogDashboard = () => {
  const [formValues, setFormValues] = useState({
    blogTitle: '',
    blogBody: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const slug = slugify(formValues.blogTitle);

    const cleanSnippet = formValues.blogBody
      .replace(/[#*_`>~\-+=]+/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .trim()
      .slice(0, 100) + '...';

    const newBlog = {
      title: formValues.blogTitle,
      content: formValues.blogBody.trim(),
      author: "Jordan Schulte",
      slug: slug,
      likes: 0,
      date: new Date().toISOString().split('T')[0],
      pfp: "/images/pfp.webp",
      snippet: cleanSnippet
    };

    try {
      const blogRef = ref(database, `blogs/${slug}`);
      await set(blogRef, newBlog);
      alert("Blog posted!");
      setFormValues({ blogTitle: '', blogBody: '' });
    } catch (err) {
      console.error("Error posting blog:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className='admin-wrapper'>
      <h1><AnimatedText text='Create Blog' /></h1>
      <form className='admin-form' onSubmit={handleSubmit}>
        <div className='form-title-wrapper'>
          <label htmlFor="blogTitle">
            Blog title:
            <input
              type="text"
              id='blogTitle'
              name='blogTitle'
              value={formValues.blogTitle}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className='form-body-wrapper'>
          <label htmlFor="blogBody">
            Blog body:
            <textarea
              id='blogBody'
              name='blogBody'
              value={formValues.blogBody}
              onChange={handleChange}>
              required
            </textarea>
          </label>
        </div>
        <button className='form-submit'>POST</button>
      </form>
    </div>
  );
};

export default BlogDashboard;
