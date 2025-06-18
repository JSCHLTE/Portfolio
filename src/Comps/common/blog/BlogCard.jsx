import { Link } from 'react-router-dom'
import { useBlogs } from '../../../hooks/useBlogs';
import AnimatedText from '../../../utils/AnimatedText'
import FormatDate from '../../../utils/FormatDate';

const BlogCard = () => {

  const { blogs, loading } = useBlogs();
  if (loading) return <p>Loading...</p>;
  if (blogs.length < 1) return <p>No blogs found.</p>;

  return (
    <>
    {blogs.map((blog) => (
      <div key={blog.slug} className='blog-card-container'>
        <Link className='blog-link' to={`/blogs/${blog.slug}`}>
          <article className='blog-item button-press'>
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
                {/* <i className="fa-regular fa-heart"></i>
                <span className='blog-meta-likes'>{blog.likes}</span> */}
              </div>
            </div>
          </article>
        </Link>
      </div>
    ))}</>
  )
}

export default BlogCard