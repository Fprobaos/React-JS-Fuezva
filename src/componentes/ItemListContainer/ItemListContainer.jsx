import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gfetch } from "../gfetch/gFetch"

import ItemList from "../ItemList/ItemList"



export const ItemListContainer = () => {

    const [products, setProducts ] = useState([])
    const [loading, setLoading ] = useState(true)

    const { idCategory } = useParams()
    

    useEffect(() => {
        if (idCategory){
            gfetch()
            .then(res => 
                setProducts(res.filter(product => product.category === idCategory)))
            .finally (() => setLoading(false))

             } else{
                
                gfetch()
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                .finally (() => setLoading(false))
                
         
 } }, [idCategory])


 
        
console.log(idCategory)
        

    

  return (
            loading ? <h2>Cargando ....</h2> :

        <div>
            <ItemList products={products} />
            
        </div>
            

        
  )
}
