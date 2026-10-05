import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto";

const FormularioContainer = () => {
  const [datosForm, setDatosForm] = useState({
    id: "",
    nombre: "",
    precio: "",
    stock: ""
  });

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };

  const manejarCambioImagen = (e) => {
    const file = e.target.files[0];
    setImagenFile(file);
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    // --- Lógica para subir la imagen a Imgbb ---
    // Corrección para acceder a variables de entorno en Vite
    const apiKey = import.meta.env.VITE_API_KEY_IMGBB;
    const formData = new FormData();

    formData.append('image', imagenFile);

    try {
      console.log("Subiendo imagen a Imgbb...");
      const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData,
      });

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
        
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url
        };

        console.log('Enviando los siguientes datos COMPLETOS a la API:', productoCompleto);
      } else {
        throw new Error('La subida de la imagen a Imgbb falló.');
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }
  };

  return (
    <>
      <FormularioProducto 
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
      />
    </>
  );
};

export default FormularioContainer;