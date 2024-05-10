import { useState, useEffect } from "react";
import axios from "axios";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || [])

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategories(response.data)
      })
  },[])

  const submit = (e) => {
    e.preventDefault()
    // console.log(project)
    handleSubmit(project)

    axios
      .post("http://localhost:8080/projects", {
        body: JSON.stringify(project)
      })
      .then(
        navigate("/projects", { message: "Projeto criado com sucesso!" })
      )
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleCategory = (e) => {
    setProject({ ...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex]
    } })
  }

  console.log(categories)

  return ( 
    <>
      <form onSubmit={submit} action="" method="get">
        <Input 
          type="text" 
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ""}
        />
        <Input 
          type="number" 
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ""}
        />
        <Select 
          name="category_id"
          text="Selecione a categoria" 
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ""}
        />
        <SubmitButton text={btnText} />
      </form>
    </>
   );
}

export default ProjectForm;