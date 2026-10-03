import styles from '../Principal/Principal.module.css'

const Principal = ({titulo,subtitulo}) => {
  return (
    <>
        <section className={styles.principal}>
          <h1>{titulo}</h1>
          <p>{subtitulo}</p>
        </section>
    </>
  )
}

export default Principal