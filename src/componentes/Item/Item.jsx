import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({info}) => {
  return (
    <div className='card w-25 mt-5 ml-5' style={
        { display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: 5, }}>

            <div className='card-header'>
                <h3>
                    {info.name}
                </h3>
            </div>

            <div className="card-body" style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
                }}>
                <h2>
                    {info.category}
                </h2>
                <img src={info.photo} alt="foto" className="img-fluid border border-5"/>

            </div>

            <div className="card-footer" style={{
                justifyContent: 'space-around'
                }}>
                    Precio : {info.price}
                    <Link to= {`/detalle/${info.id}`}>
                    <button className='btn btn-primary'> detalle</button> 
                    </Link>
            </div>


</div>
  )
}

export default Item