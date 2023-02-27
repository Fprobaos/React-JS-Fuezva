
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/Navbar/NavBar';

import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';

import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './componentes/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App(){


    return(
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path= '/' element={<ItemListContainer />}/>
            <Route path= '/category/:idCategory' element={<ItemListContainer />}/>
            <Route path= '/detalle/:idProduct' element={<ItemDetailContainer/>}/>
            <Route path= '/cart' element={<CartContainer />}/>
            <Route path= '*' element = {Navigate} to={'/'} />
          </Routes>
      </BrowserRouter>
      )
}


export default App;