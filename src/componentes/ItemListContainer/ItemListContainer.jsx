import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gfetch } from "../gfetch/gFetch"



export const ItemListContainer = () => {

    const [productos, setProductos ] = useState([])
    const [loading, setloading ] = useState(true)

    const { idCategoria } = useParams()

    useEffect(() => {
        if (idCategoria){
            gfetch()
            .then(res => { 
        
                setProductos(res.filter(producto => producto.categoria === idCategoria))
        
                })
                .catch(error => console.log(error))
                .finally (() => setloading(false))

            } else{
                
                gfetch()
                .then(res => { 
            
                    setProductos(res)
            
                    })
                    .catch(error => console.log(error))
                    .finally (() => setloading(false))
                
         }
    }, [idCategoria])
    
    console.log(idCategoria)

  return (
   
            loading ? <h2 className="">Cargando</h2>
            : 
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }} >

             {productos.map(({id,categoria,name,precio,foto}) => <div key={id}className='card w-25 mt-5'>
                                                                    <div className='card-header'>
                                                                        <h3>
                                                                            {name}
                                                                        </h3>
                                                                    </div>

                                                                    <div className="card-body">
                                                                        <h2>
                                                                        {categoria}
                                                                        </h2>
                                                                        <img src={foto} alt="foto" className="img-fluid border border-5 align-self-center"/>

                                                                    </div>

                                                                    <div className="card-footer">
                                                                        Precio : {precio}
                                                                        <Link to={`/detalle/${id}`}>

                                                                        <button className="btn btn-primary">Detalle</button>
                                                                        </Link>
                                                                    </div>

                                                                </div> )}
             
             </div>
        
  )
}
