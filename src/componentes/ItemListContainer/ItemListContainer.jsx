import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"



export const ItemListContainer = () => {


 
    const [products, setProducts ] = useState([])
    const [loading, setLoading ] = useState(true)

    const { idCategory } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollections = collection(db, 'productos')
        
        if(idCategory) {

            const queryFilter = query(queryCollections, where('category', '==', idCategory))
            getDocs(queryFilter)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()}) ) ) )    
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }
        else {

        getDocs(queryCollections)
        .then(res => setProducts(res.docs.map(product => ({id: res.id, ...product.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        }

    }, [idCategory])



  return (
            loading ? <Loading /> :

        <div style={{
            display: 'flex',
            
        }}>
            <ItemList products={products} />
            
        </div>
            

        
  )
}
