import { Link } from "react-router-dom";
import "./style.css"
import logo from "../../img/costs_logo.png"

function Navbar() {
  return ( 
    <>
      <nav>
        <Link to="/"><img src={logo} alt="Costs" /></Link>
        <span>
          <Link to="/">Home</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/contact">Contato</Link>
        </span>
      </nav>
    </>
   );
}

export default Navbar;