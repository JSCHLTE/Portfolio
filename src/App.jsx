import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from "react-router-dom";
import Navbar from "./Comps/common/Navbar"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import AnimatedText from "./Comps/common/AnimatedText"
import ScrollToTop from "./Comps/common/ScrollToTop"
import BlogPage from "./Comps/common/blog/BlogPage"
import BlogDashboard from "./Comps/common/blog/BlogDashboard"
import Login from "./Pages/Login"
import Overlay from "./Comps/common/Overlay";
import { ref, get, set } from 'firebase/database';
import { database } from './firebase';

function App() {

  const [theme, setTheme] = useState(true);
  const [navMenu, setNavMenu] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchMode = async () => {
      const modeRef = ref(database, 'lightMode');
      const snapshot = await get(modeRef);
      if (snapshot.exists()) {
        setTheme(snapshot.val());
      }
    };
    fetchMode();
  }, []);  

  useEffect(() => {
    theme ? document.body.classList.remove("light") : document.body.classList.add("light"); 
  }, [theme])

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

  const handleTheme = async () => {
    try {
      const modeRef = ref(database, 'lightMode');
  
      // Get the current value
      const snapshot = await get(modeRef);
      const current = snapshot.exists() ? snapshot.val() : false;
  
      const newMode = !current;
  
      // Save to Firebase
      await set(modeRef, newMode);
  
      // ✅ Update local state
      setTheme(newMode);
  
    } catch (err) {
      console.error("Error switching theme:", err);
      alert("Something went wrong.");
    }
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
