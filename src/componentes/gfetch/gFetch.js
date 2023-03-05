
let inventario = [
    {id: '1', stock: '10', category: 'Botines'   , name: 'Mercurial' ,  price: 22.000 , photo: 'https://sporting.vtexassets.com/arquivos/ids/380351-1200-1200?v=637698113153800000&width=1200&height=1200&aspect=true'},
    {id: '2', stock: '10', category: 'Botines'   , name: 'Tiempo'    ,  price: 25.000 , photo: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw572b3d28/products/NI_AT5881-010/NI_AT5881-010-1.JPG'   },
    {id: '3', stock: '10', category: 'Botines'   , name: 'Phantom'   ,  price: 25.000 , photo: 'https://www.quuot.com.ar/125-large_default/Botines-Nike-Phantom-VisionII-Academy-Fg-Mg.jpg'  },
    {id: '4', stock: '10', category: 'Zapatillas', name: 'Originals' ,  price: 22.500 , photo: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-zapatillas-nsRddC.png'},
    {id: '5', stock: '10', category: 'Zapatillas', name: 'Air Max 97',  price: 21.000 , photo: 'https://newsport.vteximg.com.br/arquivos/ids/15359577-1000-1000/DH5111100-A.jpg?v=638102514139670000'   },
    {id: '6', stock: '10', category: 'Zapatillas', name: 'Air Max 23',  price: 24.200 , photo: 'https://celadasa.vtexassets.com/arquivos/ids/210534-800-auto?v=637901179540600000&width=800&height=auto&aspect=true'   },
]



export const gfetch = (id) =>{

    return new Promise((res, rej) => {
                
    setTimeout(() => { 
        res( id ? inventario.find(product => product.id === id) : inventario)

        },1000)
    })
}

