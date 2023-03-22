import React from 'react'
import Cart from '../Cart/Cart'

const CartList = ({cartList}) => {
  return (
    <div>

        {cartList.map(product => <Cart key={product.id} product={product}/> ) }

    </div>
  )
}

export default CartList