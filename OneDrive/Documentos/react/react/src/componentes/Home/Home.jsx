import { useEffect, useState } from "react"

const Home = ({saludo}) => {
    const [contador, setContador ] = useState(1)
    const [booleano, setBoleano ] = useState(true)
 
    const handleCounter = () => {        
        setContador(contador+1)
    }

    const handleBool = () => {
        setBoleano(!booleano)
    }

  
  
    return (
    <div>
 <p>{saludo}</p>
            
            <div>
                <p>{contador}</p>
                <button onClick={handleCounter}>click +</button>
            </div>
                <button onClick={handleBool}>Boleano</button>
 </div>



   
  )
}

export default Home