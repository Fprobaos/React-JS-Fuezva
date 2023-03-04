import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial =1, stock, onAdd}) => {

  const [count, setCount] = useState(initial)
  const handleSuma = () => {
    if(count < stock) { 
        setCount(count + 1)
      }
    
  }

  const handleResta = () => {
    if(
      count > initial) {
        setCount(count - 1)
      }
    
  }

  const handleOnAdd = () => {
    onAdd(count)
  }

  return (
    <div className='mt-1 w-100' style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    }}>
   
      <button className = 'btn btn-outline-dark w-40' onClick={handleSuma}> + </button>
          
        <center>
          <label>{count}</label>
        </center>
          
      <button className = 'btn btn-outline-dark w-40' onClick={handleResta}> - </button>
  

      <button className="btn btn-outline-dark w-100 mt-1" onClick={handleOnAdd}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount