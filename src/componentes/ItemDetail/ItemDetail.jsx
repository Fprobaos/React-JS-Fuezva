import { useCartContext } from '../../Context/CartContext'
import Item from '../Item/Item'
import ItemCount from '../ItemCount/ItemCount'


export const ItemDetail = ({product}) => {

  const {agregarCarrito} = useCartContext()

  const onAdd = (cant) => {
    
    agregarCarrito({ ...product, cantidad: cant })
  }

  
  return (
    <div style={{
      display:'flex',
      justifyContent: 'center'
    }
  }>
        {product.map(product => <Item key={product.id} info={product}/> )}
      
      <ItemCount onAdd={onAdd}/>

    </div>
  )
} 
