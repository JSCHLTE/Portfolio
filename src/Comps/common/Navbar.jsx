import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import Theme from './Theme'
import '../../CSS/navbar.css'

const Navbar = ({ handleTheme, mode, handleBurger, navMenu, navLogin, resetUser }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("👋 Logged out");
      navigate('/login');
      resetUser();
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav>
      <div className={`nav-inner ${isScrolled ? `active` : ``}`}>
        <div className="nav-logo-wrapper center-flex">
          <Link to="/"><img src="/images/blogpfp.webp" alt="Stylized portrait of Jordan wearing sunglasses, created with a swirling, abstract filter effect that resembles painted brush strokes. The sunglasses reflect the word 'Vibes' in a bold, colorful font."/></Link>
        </div>
        
        <div className='nav-right'>
          <ul className={`nav-links ${navMenu ? `active` : ``}`}>
            <li className='nav-link'><NavLink to="/">Home</NavLink></li>
            <li className='nav-link'><NavLink to="/about">About</NavLink></li>
            <li className='nav-link'><NavLink to="/blog">Blog</NavLink></li>
            <li className='nav-link'><NavLink to="/contact">Contact</NavLink></li>
            {navLogin ? <li className='nav-link'><NavLink to="/admin">Dashboard</NavLink></li> : ''}
            {navLogin ? <li className='nav-link' onClick={handleLogout}><Link to="#">Logout</Link></li> : ''}
          </ul>
          
          <Theme handleTheme={handleTheme} mode={mode}/>
        
          <div className='nav-burger' onClick={handleBurger}>
            <div className={`line line1 ${navMenu ? 'active' : ''}`}></div>
            <div className={`line line2 ${navMenu ? 'active' : ''}`}></div>
            <div className={`line line3 ${navMenu ? 'hide' : ''}`}></div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar