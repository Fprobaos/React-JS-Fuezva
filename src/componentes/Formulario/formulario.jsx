const Formulario = ({saludar}) => {
  
    return(
      <form> 
          <input type="text" placeholder='ingrese un nombre' />
          <button onClick={saludar}>Click</button>
      </form>
    )
  }

  export default Formulario;