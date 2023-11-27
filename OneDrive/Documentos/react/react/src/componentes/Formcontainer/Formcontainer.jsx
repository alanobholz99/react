import { useState } from "react"
import { formwhilvalidation } from "./formwhilvalidation"
import form from "./form"

const Formwhilvalidation = formwhilvalidation(form)

const Formcontainer = () => {
  const [formdata, setformdata] = useState({
    nombre: '',
    correo: ''
  })
  
  
  const handlerOnChange = (evt) => {
setformdata({
  ...formdata,
  [evt.target.name]: evt.target.value
})
  
}
   
  return (
 
  


 <Formwhilvalidation
 formdata = {formdata}
handlerOnChange = {handlerOnChange} 
 
 />
  
  
  )
}

export default Formcontainer