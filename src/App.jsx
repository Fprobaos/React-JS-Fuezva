import { useState, useEffect } from 'react';
import NavBar from '../componentes/Navbar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';



function App(props){

    return(
      <>
        <NavBar />
        <ItemListContainer saludo = 'Linea 2' />
      </>
    )
}


export default App;