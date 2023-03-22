
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCartContext } from '../../Context/CartContext';


const FormOrder = () => {

  const { cartList, totalPrice, emptyCart } = useCartContext()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repeatEmail: '',
  })



  const createOrder = (evt) => {
    evt.preventDefault()
    const order = {}
    order.buyer = formData
    order.items = cartList.map( ({id, name, price}) => ({id, name, price}))
    order.total = totalPrice()
  

    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, order)
    .then(res => console.log(res))
    .catch(err => console.log(err))
   
    .finally(() => {
      emptyCart()
      setFormData({
        name: '',
        phone: '',
        email: '',
        repeatemail: '',
      })
      alert('Su orden fue creada correctamente')
    })
  

  }
  const handleOnChange = (evt) => {
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
    })
}



  return (

    <Form onSubmit={createOrder}>

      <Form.Group className="mb-3" >
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control name='name' onChange={handleOnChange} value={formData.name} type="text" placeholder="Nombre Completo" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Telefono</Form.Label>
        <Form.Control name='phone' onChange={handleOnChange} value={formData.phone} type="text" placeholder='Ingrese telefono' />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={handleOnChange} value={formData.email} type="text" placeholder="Ingresar email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Repetir Email</Form.Label>
        <Form.Control name='repeatEmail' onChange={handleOnChange} value={formData.repeatEmail} type="text" placeholder="Repetir email" />
      </Form.Group>
      <Button className="btn btn-dark btn-outline-success" type="submit">Realizar pedido</Button>
      
    </Form>
  );
}


export default FormOrder

