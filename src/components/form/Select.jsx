import "./select.css"

function Select({ text, name, options, handleOnChange, value }) {
  return ( 
    <>
      <div className="formControl">
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
          <option>Selecione uma opção</option>
          {
            options.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))
          }
        </select>
       </div>
    </>
   );
}

export default Select;