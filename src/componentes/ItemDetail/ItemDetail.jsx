
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({product}) => {

  const [isCount, setIsCount] = useState(true)
 

  const { agregarCarrito } = useCartContext()

  const onAdd = (cant)=>{
      console.log(cant)
 
      agregarCarrito( { ...product, cantidad: cant } )
      setIsCount(false)
  }  

 

  return (
    <div className='card w-25 mt-5 ml-5' style={
      { 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      textAlign: 'center',
      margin: 5, 
      
      }}>
        

          <div className='card-header'>
              <h3>
                  {product.name}
              </h3>
          </div>

          <div className="card-body" style={{
            alignItems: 'center',
            flexDirection: 'column'
          }}>
              <h2>
                  {product.category}
              </h2>
              <img src={product.photo} alt="foto" className="img-fluid border border-5 w-100"/>

          </div>

          <div className="card-footer w-100" style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>

                  Precio : {product.price}
                  <Link to= {`/detalle/${product.id}`}>  
                    <button className='btn btn-dark'> Detalle</button> 
                  </Link>
        
          </div>

        {isCount ? 
          <ItemCount onAdd={onAdd} stock={product.stock}/>
        
        :
        <div>

          <Link to='/cart'>
            <button className='btn btn-warning'>Ir al carrito</button>
          </Link>

          <Link to='/'>
            <button className='btn btn-warning'>Continuar comprando</button>
          </Link>

        </div>
        }

          
    </div>
  )
} 

export default ItemDetail