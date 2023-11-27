import React, { useState } from 'react'

export const formwhilvalidation = (FormWrappedComponent) => {
  
  
  
    const newformwhilvalidation = (props) =>{
const [error, seterror] = useState({})
const validateform = () => {
    let newerrors  = {}
    let isvalid = true
if (!props.formdata.nombre) {
    newerrors.nombre = 'el campo es obligatorio'
    isvalid = false
}
if (!props.formdata.correo) {
    newerrors.correo = 'el campo correo es obligatorio'
isvalid = false
}
seterror(newerrors)
return isvalid


}

return(  
<FormWrappedComponent

{...props}
errors = {error}
validateform = {validateform}
/>
)

  } 
  return newformwhilvalidation
}
export default formwhilvalidation