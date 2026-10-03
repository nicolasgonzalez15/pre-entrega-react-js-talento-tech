import { useState,useEffect } from "react"
import TarjetaContactoList from "../TarjetaContactoList/TarjetaContactoList"

const TarjetaContactoContainer = () => {

    const [contactos, setContactos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerContactos = async () => {
            try {
                const respuesta = await fetch('/data/contactos.json');
                
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los contactos');
                }
                
                const datos = await respuesta.json();
                setContactos(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        obtenerContactos();
    }, []);

    if (cargando) {
        return <p>Cargando contactos, por favor espere...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


  return (
    <>
        <TarjetaContactoList contactos={contactos}/>
    </>
  )
}

export default TarjetaContactoContainer