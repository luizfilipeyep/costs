import "../layout/style.css"
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  return ( 
    <>
      <section className="newProjectContainer">
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm />
      </section>      
    </>
   );
}

export default NewProject;