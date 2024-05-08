import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contactImg.png';
import menuIcon from '../../assets/menu-icon.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <div className="nav-menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={700} className='nav-menu-item'>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item'>Projects</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item'>Portfolio</Link>
      </div>
      <img className='humburger-menu-icon' src={menuIcon} alt="Humbuer menu image" />
      <button className="contactBtn"
        onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}
      >
        <img src={contactImg} alt="contact Image" className="contactBtn-img" />
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar;