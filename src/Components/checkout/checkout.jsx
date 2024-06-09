import React, { useState } from 'react'

const checkout = () => { 
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })

    const handlechangeInput = (event) => {
        setDatosForm({...datosForm, [event.target.name]: event.target.value })
    }


  return (
    <div>
        <form>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={handlechangeInput}/>

            <label>Telefono:</label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handlechangeInput}/>

            <label>Email:</label>
            <input type="email" name="email" value={datosForm.email} onChange={handlechangeInput}/>


        </form>
    </div>
  )
}

export default checkout