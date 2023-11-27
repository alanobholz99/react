import { useState } from "react"

// hook para el contador
export const useCounter = (min, max) => {
    const [ count, setcount] = useState(min)
    const handleSuma = () => {
        if (count <max ){
        
            setcount(count+1)
        }
           
        }
        const handleResta = () => {
        if (count > min ){
            setcount(count-1)
        
        }
            

    }
return{
    count,
    handleResta,
    handleSuma
}
}