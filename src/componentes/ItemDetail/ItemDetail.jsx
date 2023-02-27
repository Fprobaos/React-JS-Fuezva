import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({info}) => {
  return (
    <div className='card w-25 mt-5 ml-5'>
            <div className='card-header'>
                <h3>
                    {info.name}
                </h3>
            </div>

            <div className="card-body">
                <h2>
                    {info.category}
                </h2>
                <img src={info.photo} alt="foto" className="img-fluid border border-5 align-self-center"/>

            </div>

            <div className="card-footer">
                Precio : {info.price} 
                <Link to={`/detalle/${info.id}`}>
                <button className="btn btn-primary">Detalle</button>
                <button className='cart'>cart</button>
                </Link>
            </div>

    </div>
  )
} 

