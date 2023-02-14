
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './componentes/Navbar/NavBar';

import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemCount } from './componentes/ItemCount/ItemCount';

import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './componentes/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){


    return(
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path= '/' element={<ItemListContainer />}/>
            <Route path= '/categoria/:idCategoria' element={<ItemListContainer />}/>
            <Route path= '/detalle/:idProducto' element={<ItemDetailContainer/>}/>
            <Route path= '/cart' element={<CartContainer />}/>
          </Routes>
        {/* <ItemCount /> */}
      
      </BrowserRouter>
      )
}


export default App;