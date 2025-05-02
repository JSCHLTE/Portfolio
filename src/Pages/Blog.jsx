import { useEffect } from 'react';
import '../CSS/blog.css'
import Bio from '../Comps/common/Bio'
import BlogCard from '../Comps/common/blog/BlogCard';
import AnimatedText from '../Comps/common/AnimatedText';

const Blog = ({ user }) => {

  const useScrollLockOnLargeScreens = () => {
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          window.scrollTo(0, 0);
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      };
  
      handleResize(); // Call on mount
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        document.body.style.overflow = 'auto'; // Clean up
      };
    }, []);
  };  

  useScrollLockOnLargeScreens();

  return (
    <main className="blog-wrapper">
    <div className="blog-left">
      <Bio />
    </div>
    <div className="blog-right">
      <h1><AnimatedText text='Blogs' /></h1>
      <div className='blogs-wrapper'>
        <BlogCard user={user}/>
      </div>
    </div>
  </main>
  )
}

export default Blog