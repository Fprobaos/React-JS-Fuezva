import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  const [count, setcount] = useState(0) // [estado, funcionCambiarEstado]
  const [bool, setBool] = useState(false)
  // console.log(count)
  // let count = 0

  useEffect(() => {
    console.log('Se ejecuta siempre')
  })

  useEffect(() => {
    console.log('llamada al fetch 1')
  },[])


  useEffect(() => {
    console.log('llamada a la api 2')
  }, [bool])

  const handleBool = () => {
    setBool(!bool)
   
  }  

  const handleCount = () => {
    setcount(count + 1)
   
  }  


  console.log('Antes 1')

    return(
      <>
      
      <h1>Click: {count}</h1>
      <button onClick={handleCount}>Clickea ahora para el millon de dolare</button>
      <button onClick={handleBool}>Bool</button>
      </>

      )
}


export default App;