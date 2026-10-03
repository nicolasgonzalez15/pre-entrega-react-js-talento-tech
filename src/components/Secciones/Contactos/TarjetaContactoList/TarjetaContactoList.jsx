import TarjetaContacto from "../TarjetaContacto/TarjetaContacto"
import styles from "./TarjetaContactoList.module.css"

const TarjetaContactoList = ({contactos}) => {
  return (
    <>
    <section id="nosotros" className={styles.contactosContainer}>
      <h2 className={styles.contactosTitulo}>Nosotros</h2>
      <div className={styles.gridContainer}>
        {contactos.map(contacto => (
            <TarjetaContacto key={contacto.id} nombre={contacto.nombre} puesto={contacto.puesto} bio={contacto.bio} imagen={contacto.imagen} />
        ))}
      </div>

        </section>
    </>
  )
}

export default TarjetaContactoList