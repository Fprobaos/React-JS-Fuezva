let productos = [
    {id: '1', categoria: 'pantalones', name: 'producto 1', precio: 22, foto: 'https://w7.pngwing.com/pngs/830/804/png-transparent-blue-denim-pants-topshop-mom-jeans-denim-slim-fit-pants-jeans-fashion-top-clothing-thumbnail.png'},
    {id: '2', categoria: 'pantalones', name: 'producto 2', precio: 222, foto: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/015/914/products/bclub11-e12dc76e00b566682016179053634854-1024-1024.jpg'},
    {id: '3', categoria: 'pantalones', name: 'producto 3', precio: 2, foto: 'https://http2.mlstatic.com/D_NQ_NP_667297-MLA52162663365_102022-O.webp'},
    {id: '4', categoria: 'zapatillas', name: 'producto 4', precio: 225, foto: 'https://essential.vtexassets.com/arquivos/ids/165152-800-auto?v=636664753420630000&width=800&height=auto&aspect=true'},
    {id: '5', categoria: 'zapatillas', name: 'producto 5', precio: 210, foto: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-zapatillas-nsRddC.png'},
    {id: '6', categoria: 'zapatillas', name: 'producto 6', precio: 242, foto: 'https://newsport.vteximg.com.br/arquivos/ids/15359577-1000-1000/DH5111100-A.jpg?v=638102514139670000'},
    {id: '7', categoria: 'zapatillas', name: 'producto 7', precio: 229, foto:'https://celadasa.vtexassets.com/arquivos/ids/210534-800-auto?v=637901179540600000&width=800&height=auto&aspect=true'},
]



export const gfetch = () =>{

    return new Promise((res, rej) => {
                
    setTimeout(() => { 
        res(productos)}, 1000)

    })
}

