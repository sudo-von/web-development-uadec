import Image from 'src/components/Image/Image';
import styles from './LeftSide.styles';

const LeftSide = () => {
  return (
    <div style={styles.container}>
      <Image
        src="assets/header/logotipo.png"
        alt="Logo"
        height={41}
        width={40}
      />
      <div style={styles.ulContainer}>
        <ul>
          <li style={styles.link}>Inicio</li>
          <span style={styles.dot}>:</span>
          <li style={styles.link}>Compra</li>
          <span style={styles.dot}>:</span>
          <li style={styles.link}>Construir</li>
          <span style={styles.dot}>:</span>
          <li style={styles.link}>Venta</li>
          <span style={styles.dot}>:</span>
          <li style={styles.link}>Mudanzas</li>
          <span style={styles.dot}>:</span>
          <li style={styles.link}>Seguros</li>
          <span style={styles.dot}>:</span>
          <li style={styles.link}>Contactos</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
