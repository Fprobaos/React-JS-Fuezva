import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gfetch } from '../gfetch/gFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList'



export const ItemDetailContainer = () => {

 
  const [loading, setLoading ] = useState(true)
  const { idProduct } = useParams()
  const [products, setProducts ] = useState([])

  useEffect(() => {
      if (idProduct){
          gfetch()
          .then(res => 
            setProducts(res.filter(product => product.id === idProduct)
          ))
          .finally (() => setLoading(false))

           } else{
              
              gfetch()
              .then(res => setProducts(res))
              .catch(err => console.log(err))
              .finally (() => setLoading(false))
              
       
} }, [idProduct])
  
console.log(idProduct)

  return (
      loading ? <h2>Cargando ....</h2> :

      <div>
    
        <ItemList products={products} />

      </div>
    )
      }
