import { useCartContext } from '../../Context/CartContext'
import BlankCart from '../BlankCart/BlankCart'
import CartList from '../CartList/CartList'
import FormOrder from '../FormOrder/FormOrder'


export const CartContainer = () => {
  
  const { cartList, emptyCart, totalPrice} = useCartContext()

   
  return (
    cartList.length == 0 ? <BlankCart /> :
    
    <div style={ { display: 'flex', justifyContent: 'center', flexDirection:'column', margin: '5px'} } >  

        <CartList cartList={cartList} />

      <center className='m-3'>

        <p>{totalPrice() !== 0 && `Total del pedido: ${totalPrice()}`}</p>
        <button onClick={emptyCart}>Vaciar Carrito</button>

      </center>
      
       <FormOrder /> 
      

    </div>

    )
  }
