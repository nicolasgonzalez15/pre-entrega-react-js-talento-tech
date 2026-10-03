import styles from '../TarjetaProductoList/TarjetaProductoList.module.css'
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import Buscador from '../Buscador/Buscador'
import { useState } from 'react'

const TarjetaProductoList = ({productos}) => {

  const [itemsFiltrados, setItemsFiltrados] = useState(productos);

  const handleSearch = (query) => {
    if (query === '') {
      setItemsFiltrados(productos);
    } else {
      const filtrado = productos.filter(item =>
        item.nombre.toLowerCase().includes(query.toLowerCase()) || item.tipo.toLowerCase().includes(query.toLowerCase())
      );
      setItemsFiltrados(filtrado);
    }
  };

  const handleClean = () => {
    setItemsFiltrados(productos);
  }


  return (
    <>
    <section className={styles.productosContainer} id='catalogo'>
      <h2 className={styles.titulo}>Catálogo de productos</h2>
        <Buscador onSearch={handleSearch} onClean={handleClean} />
        {itemsFiltrados.length > 0 ? (
          <div className={styles.productosGrid}>
              {itemsFiltrados.map(({ id, imagen, descripcion, tipo, nombre, precio, precioOferta, stock }) => (
              <TarjetaProducto key={id} imagen={imagen} descripcion={descripcion} tipo={tipo} nombre={nombre} precio={precio} precioOferta={precioOferta} stock={stock}/>
              ))}
          </div>
        ) : (
          <p className={styles.sinProductos}>No hay productos disponibles.</p>
        )}
    </section> 
    </>
  )
}

export default TarjetaProductoList