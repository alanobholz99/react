import { useEffect, useState } from "react"
import { mFetch } from "../utilidad/mFetch"

// const task = new Promise ((aceptada, rechazada) => {

// // let condition = true
// if (condition){
//    setTimeout (() =>{
//     aceptada('alacito')
//    }, 4000  )
   
   
  
// } else {
//     rechazada('error')
// }
// }
// )







 //llamada a la api  ->  
function ItemListContainer() {
 const [products, setproduct] = useState([])
 const [loading, setloading] = useState (true)
    useEffect (() => {
    mFetch  ()
.then (resultado => setproduct(resultado))
.catch(error => console.log (error))  
.finally(() => setloading(false) ) // al estar el setrloading en false se cambia
  
}, []) ;
  
//forma de poner verbo a la URL// este se podria usar como usamos el de la promesa de abajo
// useEffect (() => {
// fetch('/data/data.json')
// .then (data => data.json ())
// .then (result => console.log(result))




// }, [] )  
  // console.log(products)
  
    return (
    <>
    
   
    { loading ? <h2> carganding...</h2>   
    :
    products.map(products => <div   className="card w-25    "  >
    <img src={products.imageUrl} className="card-img-top " />
   
        <div className="card-body bg-primary " >
        <p> nombre:  {products.name} </p>
        <p>precio: {products.price}</p>
        <p>categoria: {products.cetegory}</p>
        
        
        </div>
        <div className="card-footer bg-danger" >

<button className="btn btn-outline-dark w-100"  >detalle</button>
        </div>
        
        </div  >
        )    
        
    }
    </>
  )
}

export default ItemListContainer


// cambio de cargando a mostra api
//para que cambie de cargando a las imagenes se hace en base que 
// se salta el useeffect y va directamente al loading el cual esta en true
// y de esta forma tira cargadno; sin  embargo vuelve a ir para arriba y detecta 
// el useeffect y ahi ve que finalli esta en false entonces cuando vuelve a ir al ternario
// detecta toda la api.
 {/* forma de que el fetch se muestre en la app */}
    {/* {[1,2,3,4,5].map(numero => <li>{numero}</li>) } */}
    //ternario para ponga cargadando cuando esta en true de lo contrario false