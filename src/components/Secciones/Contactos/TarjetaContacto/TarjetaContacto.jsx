import styles from '../TarjetaContacto/TarjetaContacto.module.css'

const TarjetaContacto = ({id,nombre,puesto,bio,imagen}) => {
  return (
    <>
        <article key={id} className={styles.tarjetaContacto}>
            <img src={imagen} alt={bio} className={styles.imgContacto}/>
            <div className={styles.contenidoContacto}>
            <p className={styles.nombreContacto}>{nombre}</p>
             <p className={styles.puestoContacto}>{puesto}</p>
            <p className={styles.bioContacto}>{bio}</p>
            </div>
        </article>
    </>
  )
}

export default TarjetaContacto