import contact from '/src/assets/images/contact-me.svg'
import './ContactMe.css'

function ContactMe() {
  return (
    <section id="contact" className='contact'>
      <img src={contact} alt="Contact" />
      <div className="form-wrapper">
        <h3>Contact Me</h3>
        <form action="/" method="post">
          <div className="input-box">
            <label htmlFor="name">Name:</label> <br />
            <input id="name" name="" type="text" placeholder="Raghav Das" />
          </div>
          
          <div className="input-box">
            <label htmlFor="email">Email:</label> <br />
            <input id="email" name="" type="email" placeholder="raghuvardas24@gmail.com" />
          </div>
          
          <div className="input-box">
            <label htmlFor="message">Message:</label> <br />
            <textarea id="message" name="" type="text" ></textarea>
          </div>

          <input className='submit-btn' type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default ContactMe