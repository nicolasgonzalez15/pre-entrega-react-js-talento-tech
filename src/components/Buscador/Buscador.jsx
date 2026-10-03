import { useState } from "react"
import styles from '../Buscador/Buscador.module.css'

const Buscador = ({onSearch,onClean}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    // Evita que la página se recargue al enviar el formulario
    e.preventDefault();
    // Ejecuta la función de filtrado pasada por props
    onSearch(query);
  };

  const handleClean = () => {
    setQuery('');     // Limpia el input visualmente
    onClean();        // Ejecuta la lógica del padre (ej: restaurar lista original)
  };


  return (
    
    <div className={styles.buscador}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre o categoría..."
        />
        <button type="submit" className={styles.btnActualizar}>
          🔍
        </button>
        <button type="button" className={styles.btnLimpiar} onClick={handleClean}>🧹</button>
      </form>
    </div>

  )
}

export default Buscador