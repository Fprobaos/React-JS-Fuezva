import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products = []}) => {
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    }}>

    {products.map(product => <Item key={product.id} info={product}/> )}

    </div>
  )
}

export default ItemList
