import React from 'react'

 export const form = ({formdata, handlerOnChange, error, validateform}) => {
    const handleronsubmit = (evt) => {
        evt.preventdefault()
        if (validateform()){
            console.log('enviando...', formdata)
        }
       
          }

  
    return (
        <form onSubmit={handleronsubmit}>

        <input type='text'name='nombre'  placeholder = 'ingrese el nombre' value={formdata.nombre} onChange={handlerOnChange} />
      <br/>
       {error && error.nombre && <span>{error.nombre}</span>}
       <br/>
        <input type="text"name='correo'  placeholder='ingrese el email' value={formdata.correo} onChange={handlerOnChange}/>
       <br/>
        {error && error.correo && <span>{error.correo}</span>}
         <br/>
         <button>enviar</button> 
        </form>
  )
    }
export default form