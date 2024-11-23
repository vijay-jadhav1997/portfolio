import './Skills.css';
import frontend from '../../assets/frontend_tech.png';
import jsLibraries from '../../assets/react_redux.png';
import backend from '../../assets/backend.png';
import github from '../../assets/git_github.png';
import restApi from '../../assets/rest_api.png';

const Skills = () => {
  return (
    <section id='skills' className="skills">
      <h2 className='skills-heading'>My Web Development Skills</h2>
      <p className='skills-description'>Passionate about coding and web development, I thrive on exploring new technologies and AI tools.  For me, coding is not just a career path – it is a lifelong pursuit fueled by curiosity, innovation, and a love for problem-solving.</p>
      
      <div className="skills-wrapper">
        <div className="skill-category">
          <img className="skill-category-img" src={frontend} alt="Image depicting logos of frontend technologies" />
          <div className="skill-category-details">
            <h4>Frontend Technologies</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              {/* <li>Bootstrap</li> */}
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
        
      </div>

    </section>
  )
}


export default Skills;