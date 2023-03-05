import { createContext, useState, useContext, useEffect } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {
    
        const eliminarProducto = (id) => setCartList(cartList.filter(prod => prod.id !== id))

        const [cartList, setCartList] = useState([])

        
        const agregarCarrito = (newProducto) =>{
            const idxProd = cartList.findIndex(product => product.id === newProducto.id)
            if(idxProd!==-1){
                cartList[idxProd].cantidad += newProducto.cantidad
                setCartList([...cartList])
                return 
            }
    
            setCartList( [
                ...cartList,
                newProducto
            ] )
    
        }
    

        const vaciarCarrito = () => setCartList( [] )

        const precioTotal = () => cartList.reduce( (count, producto) => count += (producto.cantidad*producto.price), 0)
    
        const cantidadTotal = () => cartList.reduce( (count, producto) => count += producto.cantidad, 0)

        

        return(
            <CartContext.Provider value={{
                cartList,
                agregarCarrito,
                vaciarCarrito,
                precioTotal,
                cantidadTotal,
                eliminarProducto,
            }}>
                {children}
            </CartContext.Provider>
        )
    }






