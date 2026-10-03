import { useState } from "react"
import styles from '../Favorito/Favorito.module.css'

const Favorito = () => {
 
 const [esFavorito,setFavorito] = useState(false);

 const toggleFavorito = () =>{
    setFavorito(!esFavorito);
 }

  return (
    <>
        <span 
            className={styles.favorito} 
            onClick={toggleFavorito}>
              {esFavorito ? "💙​" : "🤍"}
        </span>
    </>
  )
}

export default Favorito