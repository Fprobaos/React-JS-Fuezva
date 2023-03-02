
import { useCartContext } from '../../Context/CartContext'


export const CartContainer = () => {

 const { cartList, vaciarCarrito } = useCartContext()

 console.log(cartList)
  return (
    <div>
        {cartList.map(product => (
            <div key={product.id}>
                <img src={product.photo} style={{width: 300}} />
                Nombre: {product.name} - Cantidad: {product.cantidad} - Precio {product.price} 

            </div>
        ))}

        <button type='submit'>Realizar Pedido</button>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>



    </div>
  )
}
