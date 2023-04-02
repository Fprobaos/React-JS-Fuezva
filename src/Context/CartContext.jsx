import { createContext, useState, useContext} from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {
    
        const deleteProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))

        const [cartList, setCartList] = useState([])

        
        let newCart

        const addToCart = (newProduct) =>{
            const idxProd = cartList.findIndex(product => product.id === newProduct.id)
            if(idxProd!==-1){
                cartList[idxProd].quantity += newProduct.quantity
                
                return(newCart= [...cartList, newProduct])

            }

            let cartProduct = cartList.find(product => product.id === newProduct.id)
            
            if(cartProduct){
                cartProduct.quantity += newProduct.quantity
                
                return(newCart= [...cartList])

            }
            
            setCartList( [ ...cartList, newProduct ] )
            
        }

        const emptyCart = () => setCartList( [] )

        const totalPrice = () => cartList.reduce( (count, product) => count += (product.quantity*product.price), 0)
    
        const totalQuant = () => cartList.reduce( (count, product) => count += product.quantity, 0)

    

        return(
            <CartContext.Provider value={{
                cartList,
                addToCart,
                emptyCart,
                totalPrice,
                totalQuant,
                deleteProduct,
            }}>
                {children}
            </CartContext.Provider>
        )
    }






