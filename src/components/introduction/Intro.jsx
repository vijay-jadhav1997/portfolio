import {Link}  from 'react-scroll';
import { PiHandbagSimpleFill } from "react-icons/pi";
import profImg from '../../assets/vj-bg.png'
import './intro.css'


function Intro() {
  return (
    <section id='intro' className="intro">
      <div className="intro-details">
        <span className="hello">Namaste/Hello, </span>
        <span className="intro-text">
          I&apos;m 
          <span className="intro-name">Vijay Jadhav</span><br />
          a full-stack developer
        </span>
        <p className="intro-para">
          I am an aspiring web developer with entry-level professional skills in Web development. As self-motivated and hardworking developer seeking an opportunity to work in a challenging environment to prove my programming skills and utilize my knowledge of web dev technologies for the growth of the organization.
        </p>
        <Link>
          <button className='hireme-btn'><PiHandbagSimpleFill className='bag-icon' /> Hire me</button>
        </Link>
      </div>
      <img className='bg-img' src={profImg} alt="Profile background Image" />
    </section>
  )
}

export default Intro