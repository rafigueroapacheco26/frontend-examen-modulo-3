import styles from './Alert.module.css'

export default function Alert({ mensaje, tipo = 'success' }) {
  return (
    <div className={styles.alerta + ' ' + styles[tipo]}>
      {mensaje}
    </div>
  )
}
