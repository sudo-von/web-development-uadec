import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import styles from './BottomNavside.styles';

const BottomNavside = () => {
  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <p style={styles.title}>Información De Última Hora</p>
      <Image
        src="assets/buscador/linea.png"
        alt="White line"
        height={4}
        width={208}
        style={styles.line}
      />
      <div>
        <p style={styles.p}>Nuevo Convenio A Casas Ecológicas. </p>
        <p style={styles.link}>Ver Más...</p>
      </div>
      <div>
        <p style={styles.p}>
          Conoce Nuestros Planes De Descuento Para Trabajadores Del ISSSTE.
        </p>
        <p style={styles.link}>Ver Más...</p>
      </div>
      <div>
        <p style={styles.p}>
          Enterate Como Puedes Pagar tu Mensualidad Si Te Encuentras En El
          Extranjero.
        </p>
        <p style={styles.link}>Ver Más...</p>
      </div>
    </Container>
  );
};

export default BottomNavside;
