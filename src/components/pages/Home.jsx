import savings from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton";
import "../layout/style.css"

function Home() {
  return ( 
    <>
      <section className="homeContainer">
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar seus projetos agora mesmo!</p>
        <LinkButton to="/projects" text="Criar Projeto" />      
        <img src={savings} alt="Costs"/>
      </section>
    </>
   );
}

export default Home;