import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaCodepen } from "react-icons/fa6";

import './Footer.css'


function Footer() {
  return (
    <footer>
      <h3>Vijay Jadhav</h3>
      <div className="footer-social-medias">
        <a href='/'><FaGithub className='icon' /> </a>
        <a href='/'><FaLinkedinIn className='icon' /> </a>
        <a href='/'><FaCodepen className='icon' /> </a>
        <a href='/'><FaXTwitter className='icon' /> </a>
      </div>
      <span className="">© All right reserved</span>
    </footer>
  )
}

export default Footer