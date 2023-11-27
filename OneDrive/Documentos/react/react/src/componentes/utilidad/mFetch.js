export const products = [ 
    {id: 1, name: 'Producto 1', category: 'remeras', price: 1000, stock: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: './assets/photo1.jpg'},
    {id: 2, name: 'Producto 2', category: 'gorras', price: 2000, stock: 52, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: './assets/chescake de frutilla.jpg'},
    {id: 3, name: 'Producto 3', category: 'gorras', price: 3000, stock: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: './assets/brownie 300x300.png'},
    {id: 4, name: 'Producto 4', category: 'gorras', price: 4000, stock: 51, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: './assets/empanadas al horno.webp'},
    {id: 5, name: 'Producto 5', category: 'gorras', price: 5000, stock: 35, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: './assets/sandwich-de-miga.jpg'}
]


export const mFetch = () => {
return new Promise ((res, rej) =>{
    setTimeout (() =>{
        res(products)
       }, 1000  )
}  )
}