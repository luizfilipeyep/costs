import { useState, useEffect } from "react";
import axios from "axios";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategories(response.data)
      })
  },[])

  console.log(categories)

  return ( 
    <>
      <form action="" method="get">
        <Input 
          type="text" 
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
        <Input 
          type="number" 
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
        />
        <Select 
          name="category_id"
          text="Selecione a categoria" 
          options={categories}
        />
        <SubmitButton text={btnText} />
      </form>
    </>
   );
}

export default ProjectForm;