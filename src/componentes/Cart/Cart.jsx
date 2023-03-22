import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Cart = ({product}) => {

const {deleteProduct} = useCartContext()

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,border:'solid', margin:'5px'}}> 
                <img src={product.photo} style={{
                    display:'block',
                    width: '150px'
                }}/>
                <p className='p-5'>
                    Nombre: {product.name} - Cantidad: {product.quantity} - Precio {product.price} 
                </p>
                <button className='btn btn-danger mr-2' onClick={() => deleteProduct(product.id)}> X </button>

        
            </div>
            
    </div>
  )
}

export default Cart