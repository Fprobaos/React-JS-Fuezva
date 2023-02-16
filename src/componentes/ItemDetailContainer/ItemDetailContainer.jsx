import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gfetch } from '../gfetch/gFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = ({productos = []}) => {

  const [loading, setLoading ] = useState(true)
  const {idProducto} = useParams()

    useEffect(() => {
      if (idProducto){
        gfetch(productos)
        .then(res => (res.filter(producto => producto.id === idProducto)))
        .finally (() => setLoading(false))

         } else{
            
            gfetch()
            .then(res => (res))
            .catch(err => console.log(err))
            .finally (() => setLoading(false))
            
     
} }, [idProducto])
  
  return (
      loading ? <h2>Cargando</h2> :
      
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
  }}>

  {productos.map(producto => <ItemDetail key={producto.id} info={producto}/> )}

  </div>
      
    
    )
      }
