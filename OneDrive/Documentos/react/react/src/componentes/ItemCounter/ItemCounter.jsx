import React, { useState } from 'react'
import { useCounter } from '../Home/hooks/useCounter'





export const ItemCounter = ({initial=1, stock=10, onAdd}) => {
 
const {count, handleResta, handleSuma} = useCounter(initial, stock)  


const  handleonAdd = () => {
    onAdd(count)
} 

    return (
    
     <div className='text-center'>
        <div>  
<p>{count}</p>

</div>
<div >

<button onClick={handleSuma}  >+ </button>
<button onClick={handleResta} > -</button>
<button onClick={handleonAdd}>agregar al carrito</button>
</div>
  </div>
    
    
    
    ) 
}

