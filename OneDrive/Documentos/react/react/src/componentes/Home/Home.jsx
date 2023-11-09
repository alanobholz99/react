
import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"


const Home = ({saludo}) => {
    const TituloApp = 'titulo de app'
    const subTituloApp = 'subtitulo app'  

    const saludar = () => {
      alert ( 'buenas')
     }
  return (
 <>
  <Titulo  titulo = {TituloApp} subtitulo = {subTituloApp} />
 < Formulario />
 <p>{saludo}</p>

<button onClick={saludo}  >saludar</button>
 </>   
   

  )
}

export default Home