import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./style.css"

function Footer() {
  return ( 
    <>
      <footer>
        <span>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </span>
        <p><span>Costs</span> &copy; 2024</p>
      </footer>
    </>
   );
}

export default Footer;