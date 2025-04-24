import { Link } from 'react-router-dom'
import Theme from './Theme'
import '../../CSS/navbar.css'
import { useEffect, useState } from 'react'

const Navbar = ({ handleTheme, mode, handleBurger, navMenu }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <div className={`nav-inner ${isScrolled ? `active` : ``}`}>
        <div className="nav-logo-wrapper center-flex">
          <Link to="/"><img src="/images/pfp.webp" alt="Graphic of the letters J and S in purple"/></Link>
        </div>
        
        <div className='nav-right'>
          <ul className={`nav-links ${navMenu ? `active` : ``}`}>
            <li className='nav-link'><Link to="/">Home</Link></li>
            <li className='nav-link'><Link to="/about">About</Link></li>
            <li className='nav-link'><Link to="/blog">Blog</Link></li>
          </ul>
          
          <Theme handleTheme={handleTheme} mode={mode}/>
        
          <div className='nav-burger' onClick={handleBurger}>
            <div className='line line1'></div>
            <div className='line line2'></div>
            <div className='line line3'></div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar