import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../layout/style.css"
import ProjectForm from "../project/ProjectForm";

function NewProject() {
  const history = useNavigate()

  const createPost = (project) => {
    project.cost = 0
    project.services = []

    // fetch("http://localhost:8080/projects", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(project)
    // }).then(() => {
    //   navigate("/projects", { message: "Projeto criado com sucesso!" })
    // })


    
  }

  return ( 
    <>
      <section className="newProjectContainer">
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
      </section>      
    </>
   );
}

export default NewProject;