import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { Navigate } from "react-router-dom";
import Navbar from "./Comps/common/Navbar"
import Projects from "./Pages/Projects"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import Contact from "./Pages/Contact";
import ScrollToTop from "./utils/ScrollToTop"
import BlogPage from "./Comps/common/blog/BlogPage"
import BlogDashboard from "./Comps/common/blog/BlogDashboard"
import Login from "./Pages/Login"
import Overlay from "./Comps/common/Overlay";
import Bio from "./Comps/common/Bio"
import { motion, AnimatePresence } from "framer-motion"
import './CSS/layout.css'
import './CSS/bio.css'
import checkIfAdmin from "./utils/checkIfAdmin";
import Loading from "./Comps/common/Loading";

const ProtectedRoute = ({ children, admin }) => {
  if (admin === undefined) return <p>Loading...</p>;
  if (!admin) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });
  const [navMenu, setNavMenu] = useState(false);
  const [user, setUser] = useState(undefined);
  const [admin, setAdmin] = useState(undefined);
  const [loading, setLoading] = useState(true)
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isAdmin = await checkIfAdmin();
        setAdmin(isAdmin);
      } else {
        await signInAnonymously(auth);
      }
      setLoading(false)
    });
  
    return () => unsubscribe();
  }, []);  

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    theme ? document.body.classList.remove("light") : document.body.classList.add("light"); 
  }, [theme]);

  const handleBurger = () => {
    setNavMenu(!navMenu)
  }

  const resetUser = () => {
    setUser(undefined)
  }

  const closeMenu = () => {
    setNavMenu(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavMenu(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTheme = () => {
    setTheme(prev => !prev);
  };

  if (loading) return <Loading />;

  return (
    <>
      <Navbar handleTheme={handleTheme} mode={theme} handleBurger={handleBurger} navMenu={navMenu} navLogin={admin} resetUser={resetUser}/>
      {navMenu ? <Overlay closeMenu={closeMenu}/> : ''}
      <div className="content-wrapper">
        <ScrollToTop setNavMenu={setNavMenu}/>
        <main className='layout-wrapper'>
          <div className={`layout-left ${location.pathname.slice(1)}`}>
            <Bio />
          </div>
          <div className="layout-right">
          <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Projects />}/>
          <Route path="about" element={<About />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path='/blogs/:slug' element={<BlogPage admin={admin}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/admin' element={
            <ProtectedRoute admin={admin}>
              <BlogDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
