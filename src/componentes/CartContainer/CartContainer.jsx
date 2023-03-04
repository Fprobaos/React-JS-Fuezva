
import { useEffect, useState } from 'react'
import { useCartContext } from '../../Context/CartContext'


export const CartContainer = () => {

 const { cartList, vaciarCarrito } = useCartContext()
 const [empty, setEmpty ] = useState(true)


 


  return (
    empty ? 
    <h1>No tenes items en tu carrito</h1>
    :

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection:'column',

    }}>  

        {cartList.map(product => (
          <div key={product.id}  style={{
            display:'flex',
            margin: '15px',
            border: 'solid',
            borderRadius: '5px',
            alignItems: 'center',
            justifyContent:'space-between',

          }} >
                <img src={product.photo} style={{
                  display:'block',
                  width: '150px'
                }}/>
                <p className='p-5'>
                  Nombre: {product.name} - Cantidad: {product.cantidad} - Precio {product.price} 
                </p>

            </div>
        ))}

      <footer>
        <button type='submit'>Realizar Pedido</button>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </footer>

    </div>
  )
}
