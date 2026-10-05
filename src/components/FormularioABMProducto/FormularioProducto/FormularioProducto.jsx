import { useState } from "react"
import styles from './FormularioProducto.module.css'

const FormularioProducto = ({datosForm, manejarCambio, manejarEnvio,manejarCambioImagen}) => {
  return (
    <>
        <section id="contacto" className={styles.formContainer}>
            <h2 className={styles.titulo}>Alta de Producto</h2>
            <h3 className={styles.subtitulo}>Por favor, ingresá los datos de tu nuevo producto</h3>
            <form action="#" method="post" onSubmit={manejarEnvio} className={styles.formProducto}>

                    <div className={styles.formItem}>
                        <label htmlFor="id">ID</label>
                        <input 
                            type="text" 
                            name="id" 
                            id="id" 
                            placeholder="Ingresa el ID..." 
                            onChange={manejarCambio}
                            required/>
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Ingresa el Nombre del Producto..." 
                            onChange={manejarCambio}
                            required/>
                    </div>


                    <div className={styles.formItem}>
                        <label htmlFor="precio">Precio</label>
                        <input 
                            type="number" 
                            name="precio" 
                            id="precio" 
                            placeholder="Ingresa el precio..." 
                            onChange={manejarCambio}
                            min={1}
                            required/>
                    </div>

                    <div className={styles.formItem}>
                        <label htmlFor="stock">Stock</label>
                        <input 
                            type="number" 
                            name="stock" 
                            id="stock" 
                            placeholder="Ingresa el stock..." 
                            onChange={manejarCambio}
                            min={1}
                            required/>
                    </div>

                <div className={styles.formItem}>
                    <label htmlFor="imagen">Imagen</label>
                    <input 
                        type="file" 
                        name="imagen" 
                        id="imagen"
                        onChange={manejarCambioImagen}
                        required/>
                </div>

                <div className={styles.formItem}>
                    <button className={styles.botonPrimario} type="submit">Guardar</button>
                    <button className={styles.botonPrimario} type="reset">Limpiar</button>
                </div>
            </form>
        </section>  
    </>
  )
}

export default FormularioProducto