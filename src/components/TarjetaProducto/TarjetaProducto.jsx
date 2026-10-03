import styles from '../TarjetaProducto/TarjetaProducto.module.css'
import Contador from '../Contador/Contador'
import Favorito from '../Favorito/Favorito'
const TarjetaProducto = ({id,imagen,nombre,tipo,descripcion,precio,precioOferta,stock}) => {



  return (

    
    <>
        <article key={id} className={styles.tarjeta}>
            <img src={imagen} alt={descripcion} />
            <div className={styles.contenidoTarjeta}>
                <p className={styles.tipoProducto}>{tipo}</p>
                <p className={styles.nombreProducto}>{nombre}</p>
                {(!precioOferta || precioOferta >= precio) ? (

                  <div className={styles.preciosProducto}>
                    <p className={styles.sinPrecioOferta}>X</p>
                    <p className={styles.precioFinal}>${precio.toLocaleString("es-AR")}</p>
                  </div>
                ) : (
                  <div className={styles.preciosProducto}>
                    <p className={styles.precioLista}>${precio.toLocaleString("es-AR")}</p>
                    <p className={styles.precioFinal}>${precioOferta.toLocaleString("es-AR")}</p>
                  </div>
                )}
                <div className={styles.featuresProducto}>
                  <Contador stock={stock}/>
                  <Favorito/>
                </div>
                <button type="button" disabled={stock<=0}>{(stock>0)?"Agregar al Carrito 🛒": "Agotado 🚫"}</button>
            </div>

        </article>
    </>
  )
}

export default TarjetaProducto