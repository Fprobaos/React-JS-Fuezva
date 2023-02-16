import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gfetch } from "../gfetch/gFetch"
import ItemList from "../ItemList/ItemList"



export const ItemListContainer = () => {

    const [productos, setProductos ] = useState([])
    const [loading, setLoading ] = useState(true)

    const { idCategoria } = useParams()
    

    useEffect(() => {
        if (idCategoria){
            gfetch()
            .then(res => 
                setProductos(res.filter(producto => producto.categoria === idCategoria)))
            .finally (() => setLoading(false))

             } else{
                
                gfetch()
                .then(res => setProductos(res))
                .catch(err => console.log(err))
                .finally (() => setLoading(false))
                
         
 } }, [idCategoria])


 
        
console.log(idCategoria)
        

    

  return (
            loading ? <h2>Cargando ....</h2> :

        <div>
            <ItemList productos={productos} />
        
        </div>
            
            /* // loading ? <h2 className="">Cargando</h2>
            // : 
            // <div style={{
            //     display: 'flex',
            //     flexDirection: 'row',
            //     flexWrap: 'wrap',
            // }} >

            //  {productos.map(({id,categoria,name,precio,foto}) => <div key={id}className='card w-25 mt-5'>
            //                                                         <div className='card-header'>
            //                                                             <h3>
            //                                                                 {name}
            //                                                             </h3>
            //                                                         </div>

            //                                                         <div className="card-body">
            //                                                             <h2>
            //                                                             {categoria}
            //                                                             </h2>
            //                                                             <img src={foto} alt="foto" className="img-fluid border border-5 align-self-center"/>

            //                                                         </div>

            //                                                         <div className="card-footer">
            //                                                             Precio : {precio}
            //                                                             <Link to={`/detalle/${id}`}>

            //                                                             <button className="btn btn-primary">Detalle</button>
            //                                                             </Link>
            //                                                         </div>

            //                                                     </div> )}
             
            //  </div> */
        
  )
}
