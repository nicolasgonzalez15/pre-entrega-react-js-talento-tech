import { useState } from "react"
import styles from '../Contador/Contador.module.css'

const Contador = ({stock}) => {
  const [cantidad,setCantidad] = useState(0);  

  const incrementar = () =>{
        if (cantidad<stock){
            setCantidad(cantidad+1);
        }
  }

  const decrementar = () =>{
      if (cantidad>0){
            setCantidad(cantidad-1);
        }
  }

  return (
    <>
        <div className={styles.contador}>
            <button onClick={decrementar} disabled={stock <= 0 || cantidad == 0}>-</button>        
            <p>{cantidad}</p>
            <button onClick={incrementar} disabled={stock <= 0 || stock == cantidad}>+</button>
        </div>    

    </>
  )
}

export default Contador