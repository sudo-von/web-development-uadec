import TransparentButton from '../TransparentButton/TransparentButton';
import styles from './TopNavside.styles';

const TopNavside = () => {
  return (
    <div style={styles.container}>
      <TransparentButton>COMPRA</TransparentButton>
      <TransparentButton>CONSTRUIR</TransparentButton>
      <TransparentButton>VENTA</TransparentButton>
      <TransparentButton>MUDANZAS</TransparentButton>
      <TransparentButton>SEGUROS</TransparentButton>
      <TransparentButton>CONTACTOS</TransparentButton>
    </div>
  );
};

export default TopNavside;
