import React from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemList = ({productos = []}) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>

    {productos.map(producto => <ItemDetail key={producto.id} info={producto}/> )}

    </div>
  )
}

export default ItemList
