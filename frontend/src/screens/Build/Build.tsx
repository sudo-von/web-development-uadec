import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Build.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Build = () => {
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
        <h1 style={styles.title}>Construir</h1>
        <p style={styles.paragraph}>
          La tendencia futurista de expansión tanto de la construcción como del
          sector empresarial es de un nivel alto debido a que se visualiza un
          avance, que 18 sumado a los proyectos que se realizan en todo México
          junto al cual se desarrolla actualmente el proyecto de construcción
          del puerto seco y la zona franca, son hechos que sin duda jalonaran el
          desarrollo arquitectónico, comercial y empresarial de Bienes raices
          multicasa.
        </p>
        <h2 style={styles.title}> Tasas de crecimiento.</h2>
        <p style={styles.paragraph}>
          Los índices porcentuales de crecimiento derivados de las estadísticas
          mencionadas anteriormente son:
        </p>
        <ol style={styles.paragraph}>
          <li>
            Para el ámbito empresarial en el valle de aburra zona sur la tasa de
            crecimiento del sector empresarial es del 4.47% promedio anual.
          </li>
          <li>
            Para el ámbito empresarial en Bienes raices multicasa según las
            estadísticas históricas es del 2.26% promedio anual, el cual se
            espera que obtenga grandes variaciones en sentido incremental,
            derivadas del proyecto zona franca y puerto seco que se realizara en
            la dicho municipio.
          </li>
          <li>
            Para el aspecto urbanístico y construcción el índice de crecimiento
            se encuentra en 23.34% siendo los dos últimos años los que presentan
            mayor variación de los datos históricos.
          </li>
        </ol>
      </Container>
    </Skeleton>
  );
};

export default Build;
