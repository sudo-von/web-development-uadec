import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './LeftSide.styles';

const LeftSide = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection={isLarge ? 'row' : 'column'}
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <Image
        src="assets/header/logotipo.png"
        alt="Logo"
        width={isLarge ? 40 : 30}
        height={isLarge ? 41 : 31}
        style={styles.logo}
      />
      <ul style={styles.ulContainer}>
        <li style={styles.link}>Inicio</li>
        {isLarge && <span style={styles.dot}>:</span>}
        <li style={styles.link}>Compra</li>
        {isLarge && <span style={styles.dot}>:</span>}
        <li style={styles.link}>Construir</li>
        {isLarge && <span style={styles.dot}>:</span>}
        <li style={styles.link}>Venta</li>
        {isLarge && <span style={styles.dot}>:</span>}
        <li style={styles.link}>Mudanzas</li>
        {isLarge && <span style={styles.dot}>:</span>}
        <li style={styles.link}>Seguros</li>
        {isLarge && <span style={styles.dot}>:</span>}
        <li style={styles.link}>Contactos</li>
      </ul>
    </Container>
  );
};

export default LeftSide;
