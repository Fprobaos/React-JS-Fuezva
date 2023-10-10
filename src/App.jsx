import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/Navbar/NavBar";

import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";

import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./componentes/CartContainer/CartContainer";
import { CartContextProvider } from "./Context/CartContext";
import BelowNavbar from "./componentes/BelowNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./componentes/HomeView";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <BelowNavbar />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/detalle/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={Navigate} to={"/"} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
