import { useEffect } from "react"
import Bio from '../Comps/common/Bio'
import Projects from "../Comps/common/home/Projects"
import '../CSS/home.css'
import '../CSS/bio.css'

const Home = () => {

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
    <main className="home-wrapper">
      <div className="home-left">
        <Bio />
      </div>
      <div className="home-right">
        <Projects />
      </div>
    </main>
  )
}

export default Home