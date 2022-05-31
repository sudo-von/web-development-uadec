import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './FrequentQuestions.styles';

const FrequentQuestions = () => {
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
          Las 6 preguntas que todo agente inmobiliario tiene que tener
          preparadas antes de enseñar una propiedad
        </h1>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>
          ¿Cuánto es el enganche mínimo que puedo dar?
        </h2>
        <p style={styles.paragraph}>
          Si el cliente usará sólo crédito bancario, puede dar desde un 10% de
          enganche. Si el cliente cotiza en Infonavit y podemos usar un esquema
          de Cofinavit, podría ser que su desembolso sea aún menor (en algunos
          casos incluso es de $0 pesos y sólo tienen que pagar el avalúo).
        </p>
        <h2 style={styles.title}>¿Cuánto me queda la mensualidad?</h2>
        <p style={styles.paragraph}>
          Para saber el monto exacto, necesitamos hacer una simulación con cada
          banco, pero para que te des una buena idea, hoy se pagan
          aproximadamente 11 mil pesos por cada millón (a 20 años) y cerca de 12
          mil pesos por cada millón (a 15 años). O si prefieres, puedes dar
          click aquí y realizar cotizaciones estimadas para la propiedad que
          estás mostrando.
        </p>
        <h2 style={styles.title}>¿Puedo juntar ingresos con otra persona?</h2>
        <p style={styles.paragraph}>
          Correcto. Si es crédito hipotecario con Infoanvit sólo es válido entre
          conyuges. Si es un crédito hipotecario con banco, puedes juntar
          ingresos con cualquier otra persona.
        </p>
        <h2 style={styles.title}>¿Cuál es el primer paso?</h2>
        <p style={styles.paragraph}>
          Sugerimos que el primer paso sea buscar la autorización oficial del
          crédito. De esa manera el cliente tendrá una línea autorizada y
          oficial y podrá hacer un ofrecimiento formal por la propiedad que le
          gusta. Contáctanos y te ayudamos con ese paso.
        </p>
        <h2 style={styles.title}>¿Qué papelería necesito?</h2>
        <p style={styles.paragraph}>
          Un expediente de crédito hipotecario contiene: Formatos de bancos
          (solicitudes, autorizaciones para revisar buró, avisos de privacidad,
          incluyendo) :
        </p>
        <ol style={styles.paragraph}>
          <li>
            Documentos generales (ids, actas de nacimiento y matrimonio y
            comprobante de domicilio)
          </li>
          <li>Comprobación de ingresos.</li>
        </ol>
        <h2 style={styles.title}>¿Puedo juntar ingresos con otra persona?</h2>
        <p style={styles.paragraph}>
          Correcto. Si es crédito hipotecario con Infoanvit sólo es válido entre
          conyuges. Si es un crédito hipotecario con banco, puedes juntar
          ingresos con cualquier otra persona.
        </p>
      </Container>
    </Skeleton>
  );
};

export default FrequentQuestions;
