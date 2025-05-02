import { Link, useNavigate } from 'react-router-dom'
import Theme from './Theme'
import '../../CSS/navbar.css'
import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase'; // adjust path as needed

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
          <Link to="/"><img src="/images/pfp.webp" alt="Graphic of the letters J and S in purple"/></Link>
        </div>
        
        <div className='nav-right'>
          <ul className={`nav-links ${navMenu ? `active` : ``}`}>
            <li className='nav-link'><Link to="/">Home</Link></li>
            <li className='nav-link'><Link to="/about">About</Link></li>
            <li className='nav-link'><Link to="/blog">Blog</Link></li>
            {navLogin ? <li className='nav-link'><Link to="/admin">Dashboard</Link></li> : ''}
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