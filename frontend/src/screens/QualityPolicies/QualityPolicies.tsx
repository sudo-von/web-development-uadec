import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './QualityPolicies.styles';

const QualityPolicies = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Skeleton>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h1 style={styles.title}>Política de Calidad</h1>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <p style={styles.paragraph}>
          La Dirección de Grupo Sociedad Azucarera Larios considera el factor
          calidad como herramienta estratégica de diferenciación competitiva y
          hace un esfuerzo de superación constante en la satisfacción de las
          necesidades y expectativas de sus clientes. Por ello dedica los
          recursos humanos y materiales necesarios para asegurar que el Sistema
          de Gestión de la Calidad descrito en el Manual de Gestión de la
          Calidad se extiende y aplica a todos los niveles de la organización y
          se mantiene actualizado.
        </p>
        <p style={styles.paragraph}>
          La calidad es el resultado de la participación de todos y cada uno de
          los empleados. Por ello la Dirección de la empresa considera que la
          mejora continua de la calidad de sus procesos es el resultado de su
          participación en extender el sentido de la excelencia a todos y cada
          uno de sus empleados.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>
          La política de calidad de Bienes raices multicasa se resume en los
          puntos siguientes:
        </h2>
        <ol style={styles.paragraph}>
          <li>Confianza en nuestra marca.</li>
          <li>
            Definición de los productos utilizando materiales con calidades
            medias-altas.
          </li>
          <li>
            Compromiso con nuestros clientes y búsqueda de su satisfacción.
          </li>
          <li>Solvencia económica.</li>
          <li>Imagen de empresa seria y profesional</li>
        </ol>
      </Container>
    </Skeleton>
  );
};

export default QualityPolicies;
