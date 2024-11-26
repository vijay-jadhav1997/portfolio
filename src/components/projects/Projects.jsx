import './Projects.css'
import indicfood from '../../assets/images/projects/indicfood.webp'
import indicquiz from '../../assets/images/projects/quiz-app.webp'
import explore_nation from '../../assets/images/projects/nation-app.webp'
import shoe_company from '../../assets/images/projects/shoe-companyapp.webp'
import indic_products from '../../assets/images/projects/indic-products-app.webp'
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="central-line"></div>
      <h2>Latest Works</h2>
      
      <div className="project indic-food left">
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="">Indic Food <FaExternalLinkAlt /></a> </span>
            <img src={indicfood} alt="indic food" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="">Indic Food</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/react-projects/tree/main/indic_food" className="github-link">(Github - indic_food)</a>
          <p className="project-details">The Indic Food App is designed to bring the rich diversity of Indian cuisine to your fingertips from restaurants and hotels across India.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>Parcel</li>
          </ul>
        </div>
      </div>

      <div className="project indic-quiz right">
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="">Indic Quiz</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/indic-quiz-app" className="github-link">(Github - indic_quiz)</a>
          <p className="project-details">The Indic Quiz offers a variety of quizzes across different subjects, each with multiple levels. The application features a progressive unlocking system where users must achieve a minimum score to unlock higher levels. After completing a quiz, users are presented with a detailed scoreboard, including progress bars, a pie chart, and a scorecard.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>Parcel</li>
          </ul>
        </div>
      
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="">IndicQuiz <FaExternalLinkAlt /></a> </span>
            <img src={indicquiz} alt="indic food" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
       
      </div>
      
      <div className="project explore-nation left">
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="">ExploreNation <FaExternalLinkAlt /></a> </span>
            <img src={explore_nation} alt="Explore Nation" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="">Explore Nation</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/react-projects/tree/main/explore-nations-project" className="github-link">(Github - explore_nation)</a>
          <p className="project-details">This React application is designed to display information about all countries in the world. It utilizes a card layout for each country, allowing users to click on a card to view detailed information about that specific country.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>React.js</li>
            <li>Parcel</li>
          </ul>
        </div>
      </div>

      <div className="project shoe-company right">
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="">Shoe Company</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/indic-quiz-app" className="github-link">(Github - shoe_company)</a>
          <p className="project-details"></p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Parcel</li>
          </ul>
        </div>
      
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="">Shoe Company <FaExternalLinkAlt /></a> </span>
            <img src={shoe_company} alt="Shoe Company" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
       
      </div>

      <div className="project indic-product left">
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="">Indic Products <FaExternalLinkAlt /></a> </span>
            <img src={indic_products} alt="Explore Nation" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="">Indic Products</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/react-projects/tree/main/explore-nations-project" className="github-link">(Github - explore_nation)</a>
          <p className="project-details">This React application is designed to display information about all countries in the world. It utilizes a card layout for each country, allowing users to click on a card to view detailed information about that specific country.</p>
          <ul className='tech-stack'>
            <li>Python</li>
            <li>Django</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Projects