import {logo} from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="social-medias">
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>Codpen</span>
        <span>Twitter</span>
      </div>
    </footer>
  )
}

export default Footer