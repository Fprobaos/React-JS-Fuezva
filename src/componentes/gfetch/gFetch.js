
import Tiempo from "../../../public/assets/Tiempo.webp"
import Phantom from "../../../public/assets/Phantom.webp";
import Originals from "../../../public/assets/Originals.webp"
import Mercurial from "../../../public/assets/Mercurial.webp"
import zapas1 from "../../../public/assets/Air Max 23.webp" 
import zapas2 from "../../../public/assets/Air Max 97.webp" 

let inventario = [
    {id: '1', stock: '10', category: 'Botines'   , name: 'Mercurial' ,  price: 22 , photo: Mercurial},
    {id: '2', stock: '10', category: 'Botines'   , name: 'Tiempo'    ,  price: 222, photo: Tiempo   },
    {id: '3', stock: '10', category: 'Botines'   , name: 'Phantom'   ,  price: 2  , photo: Phantom  },
    {id: '4', stock: '10', category: 'Zapatillas', name: 'Originals' ,  price: 225, photo: Originals},
    {id: '5', stock: '10', category: 'Zapatillas', name: 'Air Max 97',  price: 210, photo: zapas1   },
    {id: '6', stock: '10', category: 'Zapatillas', name: 'Air Max 23',  price: 242, photo: zapas2   },
]



export const gfetch = (id) =>{

    return new Promise((res, rej) => {
                
    setTimeout(() => { 
        res( id ? inventario.find(product => product.id === id) : inventario)

        },1000)
    })
}

