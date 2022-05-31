import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './Tips.styles';

const Tips = () => {
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
        <h1 style={styles.title}>
          Qué considerar antes de comprar una casa o departamento.
        </h1>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h3 style={styles.title}>
          Si uno de tus objetivos es comprar casa o departamento durante este
          año, es importante considerar los siguientes aspectos antes de dar el
          gran paso.
        </h3>
        <p style={styles.paragraph}>
          Si uno de tus objetivos es comprar casa o departamento durante este
          año, es importante considerar los siguientes aspectos antes de dar el
          gran paso. Comprar una casa o departamento es una inversión que no
          debe tomarse a la ligera. Por ello, es tan necesario tomar en cuenta
          ciertos aspectos antes de convertirse en dueño de una casa o
          departamento propio. A continuación, te compartimos 5 aspectos
          relevantes que debes considerar antes de invertir en bienes raíces en
          México. ¡Toma nota!
        </p>
        <h2 style={styles.title}>
          Recomendaciones para comprar casa o departamento
        </h2>
        <ol style={styles.paragraph}>
          <li>Sé minimalista al elegir vivienda.</li>
          <li>Una hipoteca a 15 años es mejor que una a 30 años.</li>
          <li>No excedas el 40% de tu salario en el pago de un inmueble.</li>
          <li>Amuebla con lo básico.</li>
          <li>Asegúrate de comprar casa por las razones correctas.</li>
        </ol>
      </Container>
    </Skeleton>
  );
};

export default Tips;
