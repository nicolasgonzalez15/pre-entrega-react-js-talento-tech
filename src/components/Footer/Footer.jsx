import React from 'react'
import styles from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} TECHMARKET. Todos los derechos reservados.</p>
            <p className={styles.subtext}>
                Encontrá los productos que necesitas
            </p>
    </footer>
    </>
  )
}

export default Footer