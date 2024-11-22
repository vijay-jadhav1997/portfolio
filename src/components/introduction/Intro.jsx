import {Link}  from 'react-scroll';
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaCodepen } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";
import profImg from '../../assets/vj-bg.png'
import './Intro.css'


function Intro() {
  return (
    <section id='intro' className="intro">
      <div className="intro-details">
        <span className="hello">Namaste, </span>
        <span className="intro-text">
          I&apos;m
          <span className="intro-name">Vijay Jadhav</span><br />
          a full-stack developer
        </span>
        <p className="intro-para">
          I am an aspiring web developer with entry-level professional skills in Web development. As self-motivated and hardworking developer seeking an opportunity to work in a challenging environment to prove my programming skills and utilize my knowledge of web dev technologies for the growth of the organization.
        </p>
        <Link to=''>
          <button className='hireme-btn'><PiHandbagSimpleFill className='bag-icon' /> Hire me</button>
        </Link>
        <div className="social-medias">
          {/* <a href='#' target='_blank'>
            <div className="button">
              <FaGithu className='icon'b/>
              </div>
              <span>Email</span>
            <div className="icon-wrapper">
          </a> */}

          <a href='#' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaGithub className='icon' />
              </div>
              <span>Github</span>
            </div>
          </a>

          <a href='#' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaLinkedinIn className='icon' />
              </div>
              <span>LinkedIn</span>
            </div>
          </a>

          <a href='#' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaCodepen className='icon' />
              </div>
              <span>Codepen</span>
            </div>
          </a>

          <a href='#' target='_blank'>
            <div className="button">
              <div className="icon-wrapper">
                <FaXTwitter className='icon' />
              </div>
              <span>X (Twitter)</span>
            </div>
          </a>
        </div>
      </div>
      <img className='bg-img' src={profImg} alt="Profile background Image" />
      
    </section>
  )
}

export default Intro