import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto";
const FormularioContainer = () => {
  
  const [datosForm,setDatosForm] = useState(
    {
        id:"",
        nombre:"",
        precio:"",
        stock:""
    }
  )

const manejarCambio = (e)=>{
    const {name,value} = e.target;
    setDatosForm(
        {
        ...datosForm,
        [name]:value
        }
    )
}

const manejarEnvio = (e)=>{
    e.preventDefault();
    console.log("Enviando datos de formulario");
}   

  return (
    <>
        <FormularioProducto 
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}/>
    </>
  )
}

export default FormularioContainer