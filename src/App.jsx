import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom";
import Navbar from "./Comps/common/Navbar"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import Contact from "./Pages/Contact";
import AnimatedText from "./Comps/common/AnimatedText"
import ScrollToTop from "./Comps/common/ScrollToTop"
import BlogPage from "./Comps/common/blog/BlogPage"
import BlogDashboard from "./Comps/common/blog/BlogDashboard"
import Login from "./Pages/Login"
import Overlay from "./Comps/common/Overlay";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true;
  });
  const [navMenu, setNavMenu] = useState(false);
  const [user, setUser] = useState(undefined);

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

  const ProtectedRoute = ({ children }) => {
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
      });
      return () => unsubscribe();
    }, []);
  
    if (user === undefined) return <p>Loading...</p>;
    if (!user) return <Navigate to="/login" replace />;
  
    return children;
  };

  const handleTheme = () => {
    setTheme(prev => !prev);
  };

  return (
    <>
    <Navbar handleTheme={handleTheme} mode={theme} handleBurger={handleBurger} navMenu={navMenu} navLogin={user} resetUser={resetUser}/>
    {navMenu ? <Overlay closeMenu={closeMenu}/> : ''}
    <div className="content-wrapper">
    <ScrollToTop setNavMenu={setNavMenu}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog user={user}/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path='/blogs/:slug' element={<BlogPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/admin' element={
          <ProtectedRoute>
            <BlogDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
    </>
  )
}

export default App
