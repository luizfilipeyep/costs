import "./select.css"

function Select({ text, name, options, handleOnChange, value }) {
  return ( 
    <>
      <div className="formControl">
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
          <option>Selecione uma opção</option>
        </select>
       </div>
    </>
   );
}

export default Select;