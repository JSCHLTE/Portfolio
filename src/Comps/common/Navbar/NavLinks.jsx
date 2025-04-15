import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className='nav-links'>
        <li className='nav-link'><Link to="/">Home</Link></li>
        <li className='nav-link'><Link to="/blog">Blog</Link></li>
    </ul>
  )
}

export default NavLinks