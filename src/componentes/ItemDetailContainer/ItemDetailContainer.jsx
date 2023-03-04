import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gfetch } from '../gfetch/gFetch'
import ItemDetail from "../ItemDetail/ItemDetail"





export const ItemDetailContainer = () => {

 
  const [loading, setLoading ] = useState(true)
  const { idProduct } = useParams()
  const [product, setProduct ] = useState({})

  useEffect(() => {
      gfetch(idProduct)
      .then( response => setProduct(response))
      .catch(error => setProduct(error))
      .finally (() => setLoading(false))
      console.log(product)
                  
} , [])
  


  return (
      loading ? <h2>Cargando ....</h2> :

      <div>
    
        <ItemDetail product={product}/>

      </div>
    )
      }
