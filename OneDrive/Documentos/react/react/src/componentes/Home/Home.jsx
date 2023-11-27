
import { useEffect, useRef, useState } from "react"
import Formulario from "../Formcontainer/Formcontainer"
import Titulo from "../Titulo/Titulo"

const ItemCount = ( ) => {
  const [counter, cambiarvalorcounter] = useState(1)


const renderCount = useRef(0)
renderCount.current++

  const handlercounter = () => {
  
    cambiarvalorcounter(counter+1)
  
     
  }


return ( 
<div>
<label>{counter} </label>
<button  onClick = {handlercounter} >click +</button>
<p>Este se renderizó : {renderCount.current}</p>


</div>
)
}
// primero renderiza home, segubndo el primer useeffect y asi sucesivamente

// const Home = ({saludo}) => {
  
 // siempre la llammada a la api va a tener useeffect// los useeffect se ejecutran orden decendente// si necesito hacer otra cosas debo usar otro useeffect
  //useeffect sirve para promesas 
//  cada vez que se vuelva a hacer un re-render se va hacer una limpieza
  // useEffect (() => {
  //   alert('api')
  //   return () => {
  //     console.log ('efecto limpieza')
  //   }
  // })
  // se ejecuta una sola vez por el array de dependencia
  // useEffect (() => {
  //   console.log ('se ejecuta una sola vez')
  // },
  // [])
  const Home = ({saludo}) => {
  // para usar librerias, en las cuales generalmente dice de usar getelementbyid pero debo usar useref
const divRef = useRef (null)

  // de esta forma modifico em DOM y el texto cambia con el button
  const handleClik = () => {
    divRef.current.innerHTML = 'contenido nuevo'
  }
  
  
  




  
   {/* <Titulo  titulo = {TituloApp} subtitulo = {subTituloApp} /> */}
 {/* < Formulario /> */}


{/* <button onClick={saludo}  >saludar</button> */}


  // los use como props
  // const TituloApp = 'titulo de app'
  //   const subTituloApp = 'subtitulo app'  
// aca voy a tener la llamda a la API 
 {/* el texto cambvia gracias al usereft con apretar el boton*/}
{/* REF es como un ID */}
{/* current es el div */}
{/* el inner es para que cambie el texto */}
return (
 <>
  
  <ItemCount/>
 
 
 <div>

 <p>{saludo}</p>

<div ref={divRef}>
contenido original
</div>
 <button onClick={handleClik} >cambio de texto</button>
 </div>
 
 
 </>   
   

  )
}

export default Home