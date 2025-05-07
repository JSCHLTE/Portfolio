import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Bio from "./Comps/common/Bio"
import './CSS/layout.css'
import './CSS/bio.css'

const Layout = () => {
    const location = useLocation();

    const useScrollLockOnLargeScreens = () => {
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth > 900) {
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

    // Reset scroll position when route changes
    useEffect(() => {
        const rightContainer = document.querySelector('.layout-right');
        if (rightContainer) {
            rightContainer.scrollTop = 0;
        }
    }, [location.pathname]);
    
    useScrollLockOnLargeScreens();

    return (
        <main className='layout-wrapper'>
            <div className='layout-left'>
                <Bio />
            </div>
            <div className='layout-right'>
                <Outlet />
            </div>
        </main>
    )
}

export default Layout