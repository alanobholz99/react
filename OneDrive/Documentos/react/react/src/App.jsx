import { useState } from "react"

import NavBar from "./componentes/NavBar/NavBar"
import Home from "./componentes/home/Home"


const saludar = () => {
  alert ( 'buenas')
 }



function App () {  
  const [counter, cambiarvalorcounter] = useState(0)
  // cambiarcounter guarda en counter para que vuelva a cambiar el valor

  const TituloApp = 'titulo de app'
  const subTituloApp = 'subtitulo app'  
//  a saludar lo paso al home y en el home llamo a al "saludo" para que me lleve saludar 


const handlercounter = () => {
  
  cambiarvalorcounter(counter+1)

   
}
console.log ('tacos')
return (
    <>
  <NavBar>

  <Home saludo = {saludar}/>

  </NavBar>
   
    <label>{counter} </label>
    <button  onClick = {handlercounter} >click +</button>
    
   
   
    </>

  )
}

export default App
