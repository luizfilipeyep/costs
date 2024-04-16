function ProjectForm() {
  return ( 
    <>
      <form action="" method="get">
        <div><input type="text" placeholder="Insira o nome do projeto" /></div>
        <div><input type="number" placeholder="Insira o orçamento total" /></div>
        <select name="category_id">
          <option disabled>Selecione a categoria</option>
        </select>
        <div><input type="submit" value="Criar Projeto" /></div>
      </form>
    </>
   );
}

export default ProjectForm;