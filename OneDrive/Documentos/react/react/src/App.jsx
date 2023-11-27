import { useState } from "react"

import NavBar from "./componentes/NavBar/NavBar"
import Home from "./componentes/home/Home"


import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { ItemCounter } from "./componentes/ItemCounter/ItemCounter";

import Formcontainer from "./componentes/Formcontainer/Formcontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
const ItemList = () => {
  const [valor, cambiar ] = useState(0)
const handlercontrol = () => {
  cambiar(valor-1)

}
return (
<div>
<label >{valor}</label>
<button onClick={handlercontrol} >click -</button>

</div>

)
}

  


const saludar = () => {

 }



function App () {  
  const [counter, cambiarvalorcounter] = useState(0)
  // cambiarcounter guarda en counter para que vuelva a cambiar el valor

  const TituloApp = 'titulo de app'
  const subTituloApp = 'subtitulo app'  
//  a saludar lo paso al home y en el home llamo a al "saludo" para que me lleve saludar 

// cada vez que yo apreto el onclick se produce un re rendering.
// const handlercounter = () => {
  
//   cambiarvalorcounter(counter+1)

   
// }
// console.log ('tacos')

const onAdd = (cant) => {
  console.log ('cantidad seleccionada:', cant )
}
return (
    <>
  <NavBar>

  

  </NavBar>
  <Home saludo = {saludar}/>
   
   <ItemList/>
    
   <ItemListContainer   />
   <ItemCounter initial={1} stock = {5} onAdd = {onAdd} />
   
   <Formcontainer/>
   
    </>

  )
}

export default App
