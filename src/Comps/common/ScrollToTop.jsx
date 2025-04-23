import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ setNavMenu }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavMenu(false)
  }, [pathname]);

  return null;
};

export default ScrollToTop;
