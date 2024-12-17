import './Skills.css';
// import frontend from '../../assets/images/skills/frontend_tech.png';
// import jsLibraries from '../../assets/images/skills/react_redux.png';
// import backend from '../../assets/images/skills/backend.png';
// import github from '../../assets/images/skills/git_github.png';
// import restApi from '../../assets/images/skills/rest_api.png';

import javascript from '../../assets/images/js.png'
import typescript from '../../assets/images/typescript.png'
import reactjs from '../../assets/images/reactjs.png'
import reduxjs from '../../assets/images/reduxjs.png'
import html5 from '../../assets/images/html-5.png'
import css3 from '../../assets/images/css-3.png'
import tailwindcss from '../../assets/images/Tailwind.png'
import bootstrap from '../../assets/images/bootstrap.png'

import python from '../../assets/images/python.png'
import django from '../../assets/images/django2.png'

// import restframework from '../../assets/images/restframework.png'
import postgresql from '../../assets/images/postgresql.png'
import redis from '../../assets/images/redis.png'
import sql from '../../assets/images/redis.png'

import git from '../../assets/images/git.png'
import github from '../../assets/images/github.png'
import npm from '../../assets/images/npm.png'

const Skills = () => {
  return (
    <section id='skills' className="skills">
      <h2 className='skills-heading'>My Web Development Skills</h2>
      <p className='skills-description'>Passionate about coding and web development, I thrive on exploring new technologies and AI tools.  For me, coding is not just a career path – it is a lifelong pursuit fueled by curiosity, innovation, and a love for problem-solving.</p>

      <div className="skills-container">
        <h3 className='skills-title'>Frontend Technologies</h3>
        <div className="frontend">
          <div className="skill">
            <div className="img-wrapper">
              <img src={html5} alt="HTML 5" />
            </div>
            <h4>HTML 5</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={css3} alt="CSS 3" />
            </div>
            <h4>CSS 3</h4>
          </div>
        
          <div className="skill">
            <div className="img-wrapper">
              <img src={javascript} alt="Javascript" />
            </div>
            <h4>JavaScript</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={typescript} alt="Typescript" />
            </div>
            <h4>Typescript</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={reactjs} alt="React.js" />
            </div>
            <h4>React</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={reduxjs} alt="Redux.js" />
            </div>
            <h4>Redux</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={tailwindcss} alt="Tailwind CSS" />
            </div>
            <h4>Tailwind CSS</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={bootstrap} alt="Bootstrap" />
            </div>
            <h4>Bootstrap</h4>
          </div>
          
        </div>

        <h3 className='skills-title'>Backend Technologies</h3>
        <div className="backend">
          <div className="skill">
            <div className="img-wrapper">
              <img src={python} alt="Python" />
            </div>
            <h4>Python</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={django} alt="Django" />
            </div>
            <h4>Django</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={django} alt="Django Rest Framework" />
            </div>
            <h4>Django Rest Framework</h4>
          </div>
          
        </div>

        <h3 className='skills-title'>Database</h3>
        <div className="database">
          <div className="skill">
            <div className="img-wrapper">
              <img src={sql} alt="SQL" />
            </div>
            <h4>SQL</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={postgresql} alt="Postgresql" />
            </div>
            <h4>Postgresql</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={redis} alt="Redis" />
            </div>
            <h4>Redis</h4>
          </div>
          
        </div>

        <h3 className='skills-title' >Other</h3>
        <div className="other" >
          <div className="skill">
            <div className="img-wrapper">
              <img src={git} alt="Git" />
            </div>
            <h4>Git</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={github} alt="GitHub" />
            </div>
            <h4>GitHub</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={npm} alt="npm" />
            </div>
            <h4>npm</h4>
          </div>
          
        </div>

      </div>
      
      {/* <div className="skills-wrapper">
        <div className="skill-category">
          <img className="skill-category-img" src={frontend} alt="Image depicting logos of frontend technologies" />
          <div className="skill-category-details">
            <h4>Frontend Technologies</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className="skill-category">
          <img className="skill-category-img" src={jsLibraries} alt="Image depicting logos of JavaScript framework." />
          <div className="skill-category-details">
            <h4>JavaScript Libraries</h4>
            <ul>
              <li>React.js</li>
              <li>Redux.js</li>
              <li>React-router-dom</li>
            </ul>
          </div>
        </div>
        
        
        <div className="skill-category">
          <img className="skill-category-img" src={backend} alt="Image depicting logos of backend technologies" />
          <div className="skill-category-details">
            <h4>Backend Technologies</h4>
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
        
        
        <div className="skill-category">
          <img className="skill-category-img" src={github} alt="Image depicting logos of version control technologies" />
          <div className="skill-category-details">
            <h4>Version Control & Collaboration</h4>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        
        <div className="skill-category">
          <img className="skill-category-img" src={restApi} alt="Image depicting logos of API development technologies" />
          <div className="skill-category-details">
            <h4>API Development</h4>
            <ul>
              <li>Django Rest Framework</li>
              <li>RestAPI</li>
            </ul>
          </div>
        </div>
        
        <div className="skill-category">
          <img className="skill-category-img" src={restApi} alt="Image depicting logos of API development technologies" />
          <div className="skill-category-details">
            <h4>Other</h4>
            <ul>
              <li>npm</li>
              <li>vs code</li>
              <li>Vite</li>
              <li>Parcel</li>
            </ul>
          </div>
        </div>
        
      </div> */}

    </section>
  )
}


export default Skills;