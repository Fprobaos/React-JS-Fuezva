
import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCartContext } from '../../Context/CartContext';
import formorder from '../FormOrder/formorder.css'
import swal from 'sweetalert';




const FormOrder = () => {
  

const { cartList, totalPrice, emptyCart } = useCartContext()
const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    repeatEmail: '',
  })
  
  
  
  
  const [formError, setFormError] = useState({})
  
  const validateData = () => {
    
    const err = {} 
    
    if(formData.name === '')
    {err.name = 'El campo nombre debe estar completo'}
    
    
    if(formData.email === ''|| formData.email !== formData.repeatEmail)
    {err.email = 'El campo Email debe estar completo y las direcciones deben coincidir'}
    
    
    if(formData.email === '')
    {err.email = 'El campo repetir Email debe estar completo y las direcciones deben coincidir'}
    
    
    
    if(formData.phone === '')
    {err.phone = 'El campo telefono debe estar completo'}
    
    
    
    setFormError({...err})
    
    return Object.keys(err).length < 1 ;
    
    
  }
  
  
  
  
  const createOrder = (evt) => {
    
    evt.preventDefault()
    
    let validation = validateData()
    
    const order = {}
    order.buyer = formData
    order.items = cartList.map( ({id, name, price}) => ({id, name, price}))
    order.total = totalPrice()
    
    
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
  
  
    const newOrder = () => {
    
    addDoc(ordersCollection, order)
    .then(res => swal({
      title: 'Su orden fue creada correctamente',
      text: 'ID de compra : ' + res.id  ,
      icon: 'success',
      button: 'Aceptar',
    }))
    .catch(err => console.log(err))
    
  
  }
     
  
  

    if (validation == false){
      return(
        swal({
          title: 'Su formulario tiene errores',
          text: 'Por favor vuelva a ingresar correctamente sus datos',
          icon: 'error',
          button: 'Aceptar',
        }))
    }
    else {

      newOrder()     
      emptyCart()
      setFormData({ name: '', phone: '', email: '', repeatemail: '',})
  
      
    }

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
        <span className='non-valid'>{formError.name}</span>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Telefono</Form.Label>
        <Form.Control name='phone' onChange={handleOnChange} value={formData.phone} type="text" placeholder='Ingrese telefono' />
        <span className='non-valid'>{formError.phone}</span>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={handleOnChange} value={formData.email} type="text" placeholder="Ingresar email" />
        <span className='non-valid'>{formError.email}</span>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Repetir Email</Form.Label>
        <Form.Control name='repeatEmail' onChange={handleOnChange} value={formData.repeatEmail} type="text" placeholder="Repetir email" />
        <span className='non-valid'>{formError.email}</span>
      </Form.Group>
      <Button className="btn btn-dark btn-outline-success" type="submit">Realizar pedido</Button>

      
    </Form>
  );
}


export default FormOrder

