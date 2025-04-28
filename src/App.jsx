import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Comps/common/Navbar"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import AnimatedText from "./Comps/common/AnimatedText"
import ScrollToTop from "./Comps/common/ScrollToTop"
import { blogData } from "./Comps/common/blog/blogData"
import BlogPage from "./Comps/common/blog/BlogPage"

function App() {

  const [theme, setTheme] = useState(true);
  const [navMenu, setNavMenu] = useState(false);

  const handleTheme = (mode) => {
    setTheme(mode);
  }

  useEffect(() => {
    theme ? document.body.classList.remove("light") : document.body.classList.add("light"); 
  }, [theme])

  const handleBurger = () => {
    setNavMenu(!navMenu)
  }

  return (
    <>
    <Navbar handleTheme={handleTheme} mode={theme} handleBurger={handleBurger} navMenu={navMenu}/>
    <div className={`overlay ${navMenu ? `active` : ``}`} onClick={() => setNavMenu(false)}></div>
    <div className="content-wrapper">
    <ScrollToTop setNavMenu={setNavMenu}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path='/blogs/:slug' element={<BlogPage />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
