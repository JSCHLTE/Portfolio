import { Route, Routes } from "react-router-dom"
import Navbar from "./Comps/common/Navbar"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import { useEffect, useState } from "react"

function App() {

  const [theme, setTheme] = useState(true);

  const handleTheme = (mode) => {
    setTheme(mode);
  }

  useEffect(() => {
    theme ? document.body.classList.remove("light") : document.body.classList.add("light"); 
  }, [theme])

  return (
    <>
    <Navbar handleTheme={handleTheme} mode={theme}/>
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
