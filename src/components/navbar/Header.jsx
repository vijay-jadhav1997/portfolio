import './Header.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contactImg.png';
import menuIcon from '../../assets/menu-icon.png';
import {Link} from 'react-scroll';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className="nav-menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className='nav-menu-item'>Home</Link>
        {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={700} className='nav-menu-item'>About</Link> */}
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={700} className='nav-menu-item'>Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={700} className='nav-menu-item'>Skills</Link>
      </nav>
      <button className="contactBtn"
        onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}
      >
        <img src={contactImg} alt="contact Image" className="contactBtn-img" />
        Contact Me
      </button>
      <img className='humburger-menu-icon' src={menuIcon} alt="Humbuer menu image" />
    </header>
  )
}

export default Header;