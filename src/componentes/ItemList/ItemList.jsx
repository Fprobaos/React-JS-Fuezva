import React from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemList = ({products = []}) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>

    {products.map(product => <ItemDetail key={product.id} info={product}/> )}

    </div>
  )
}

export default ItemList
