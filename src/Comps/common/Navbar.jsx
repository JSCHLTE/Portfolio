import { Link } from 'react-router-dom'
import Theme from './Theme'
import '../../CSS/navbar.css'

const Navbar = ({ handleTheme, mode }) => {
  return (
    <nav>
      <div className='nav-inner'>
        <div className="nav-logo-wrapper center-flex">
          <img src="/images/pfp.webp" alt="Graphic of the letters J and S in purple"/>
        </div>
        
        <div className='nav-right'>
          <ul className='nav-links'>
            <li className='nav-link'><Link to="/">Home</Link></li>
            <li className='nav-link'><Link to="/blog">Blog</Link></li>
          </ul>
          
          <Theme handleTheme={handleTheme} mode={mode}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar