import './ContactMe.css'

function ContactMe() {
  return (
    <section id="contact" className='contact'>
      <div className="form-wrapper">
          <h3>Contact Me</h3>
        <form action="/" method="post">
          <div className="input-box">
            <label htmlFor="name">Name:</label>
            <input id="name" name="" type="text" placeholder="Raghav Das" />
          </div>
          
          <div className="input-box">
            <label htmlFor="email">Email:</label>
            <input id="email" name="" type="email" placeholder="raghuvardas24@gmail.com" />
          </div>
          
          <div className="input-box">
            <label htmlFor="mobile">Mobile No:</label>
            <input id="mobile" name="" type="tel" placeholder="8551872404" />
          </div>

          <div className="input-box">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="" type="text" ></textarea>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default ContactMe