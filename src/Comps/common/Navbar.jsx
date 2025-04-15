import NavLogo from './Navbar/NavLogo'
import NavLinks from './Navbar/NavLinks'
import Theme from './Navbar/Theme'
import '../../CSS/navbar.css'

const Navbar = ({ handleTheme, mode }) => {
  return (
    <nav>
      <div className='nav-inner'>
        <NavLogo />
        <div className='nav-right'>
          <NavLinks />
          <Theme handleTheme={handleTheme} mode={mode}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar