import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from "../ItemDetail/ItemDetail"
import { Loading } from '../Loading/Loading'





export const ItemDetailContainer = () => {

  const [product, setProduct ] = useState({})
 
  const [loading, setLoading ] = useState(true)
  const { idProduct } = useParams()

  useEffect(()=>{        
    const db = getFirestore() 
    const query = doc(db, 'items', idProduct)
    getDoc(query)
    .then( res => setProduct( { id: res.id, ...res.data() } ))
    .finally(setLoading(false))
    
}, [])

  

  return (
      loading ? <Loading /> :

      <div>
    
        <ItemDetail product={product}/>

      </div>
    )
      }
