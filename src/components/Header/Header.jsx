import logo from '/images/logo/logo-techmarket.jpg'
import styles from '../Header/Header.module.css'

const Header = ({titulo}) => {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <img src={logo} className={styles.logoImg} alt="Logo Tech Market" />
                <a href="#" className={styles.logoTitle}>{titulo}</a>
            </div>
            <nav>
                <ul className={styles.navStyle}>
                    <li className="nav-item"><a href="#" className={styles.linkStyle}>Inicio</a></li>
                    <li className="nav-item"><a href="#catalogo" className={styles.linkStyle}>Catálogo</a></li>
                    <li className="nav-item"><a href="#contacto" className={styles.linkStyle}>Contacto</a></li>
                    <li className="nav-item"><a href="#nosotros" className={styles.linkStyle}>Nosotros</a></li>
                    <li className="nav-item"><a href="#carrito" className={styles.linkStyle}>Carrito</a></li>
                </ul>
            </nav>
            
        </header>
    </>
  )
}

export default Header