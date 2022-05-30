import Container from 'src/components/Container/Container';
import useMediaQuery from 'src/hooks/useMediaQuery';
import TransparentButton from '../TransparentButton/TransparentButton';
import handleStyles from './TopNavside.styles';

const TopNavside = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection={isLarge ? 'column' : 'row'}
      justifyContent="flex-start"
      style={styles.container}
    >
      <TransparentButton style={styles.transparentButton}>
        COMPRA
      </TransparentButton>
      <TransparentButton style={styles.transparentButton}>
        CONSTRUIR
      </TransparentButton>
      <TransparentButton style={styles.transparentButton}>
        VENTA
      </TransparentButton>
      <TransparentButton style={styles.transparentButton}>
        MUDANZAS
      </TransparentButton>
      <TransparentButton style={styles.transparentButton}>
        SEGUROS
      </TransparentButton>
      <TransparentButton style={styles.transparentButton}>
        CONTACTOS
      </TransparentButton>
    </Container>
  );
};

export default TopNavside;
