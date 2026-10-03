import { useState } from "react"
import styles from './FormularioContacto.module.css'

const FormularioContacto = () => {
  return (
    <>
        <section id="contacto" className={styles.formContainer}>
            <h2 className={styles.titulo}>Contacto</h2>
            <h3 className={styles.subtitulo}>Envianos tu mensaje y nos comunicaremos a la brevedad</h3>
            <form action="#" method="post" class={styles.formContacto}>
               
                    <div class={styles.formItem}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre..." required/>
                    </div>
                    <div class={styles.formItem}>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" name="apellido" id="apellido" placeholder="Ingresa tu apellido..." required/>
                    </div>
           
                <div class={styles.formItem}>
                    <label htmlFor="mail">Mail</label>
                    <input type="email" name="mail" id="mail" required placeholder="Ej: nombre@dominio.com"/>
                </div>
                <div class={styles.formItem}>
                    <label htmlFor="motivo">Motivo de contacto</label>
                    <select name="motivo" id="motivo" required>
                        <option value="consulta" selected>Consulta</option>
                        <option value="sugerencia">Sugerencia</option>
                        <option value="reclamo">Reclamo</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div class={styles.formMensaje}>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" rows="10" placeholder="Ingrese su consulta..."></textarea>
                </div>
                <div class={styles.formItem}>
                    <button class={styles.botonPrimario} type="submit">Enviar</button>
                    <button class={styles.botonPrimario} type="reset">Limpiar</button>
                </div>
            </form>
        </section>  
    </>
  )
}

export default FormularioContacto