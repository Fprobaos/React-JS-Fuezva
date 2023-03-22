import { collection, getFirestore, query } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'

const OrderConfirmation = () => {
  
  const {idOrder} = useParams()

  

  return (
    <div>

      <img src="https://media.istockphoto.com/id/1133442802/vector/green-checkmark-vector-illustration.jpg?s=612x612&w=0&k=20&c=NqyVOdwANKlbJNqbXjTvEp2wIZWUKbfUbRxm9ROPk6M=" alt="" />
      <h3>Tu pedido N° ha sido confirmado</h3>

    </div>
  )
}

export default OrderConfirmation