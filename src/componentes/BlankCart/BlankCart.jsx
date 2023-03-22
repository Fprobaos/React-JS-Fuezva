import React from 'react'
import { Link } from 'react-router-dom'

const BlankCart = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '150px',
    }}>

        <h2 className='m-5'>No hay productos en el carrito</h2>
        <Link to='/'>
            <button className='btn btn-primary'>Continuar comprando</button>
        </Link>
       
    </div>
  )
}

export default BlankCart;