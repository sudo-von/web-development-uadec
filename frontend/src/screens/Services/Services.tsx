import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './Services.styles';
import Image from 'src/components/Image/Image';

const Services = () => {
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
          Crédito hipotecario, ¿cómo obtener una buena tasa de interés?
        </h1>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <Image
          src="https://blog.bayport.mx/wp-content/uploads/2019/01/requisitos-para-solicitar-un-credito-de-nomina-portada1.jpg"
          alt="Mission"
          height={200}
          width={300}
        />
        <p>
          Acceder a un crédito hipotecario implica cubrir ciertos requisitos,
          como tener un buen historial crediticio, contar con un ahorro para
          cubrir los gastos iniciales y comprobar ingresos, mismos que deben
          estar regularizados y timbrados —recibos de nómina—, entre otros.
          <td>
            <tr>
              Cuando los clientes cubren estos tres puntos y se inicia el
              proceso proceso proceso para obtener el préstamo, suelen surgir
              dudas ligadas a los pagos, la tabla de amortización y,
              especialmente, tasa de interés.
            </tr>
            <tr>
              Para comprender cómo se calcula una tasa de interés, es necesario
              aprender sobre el perfil de riesgo y sus implicaciones. Cada
              cliente tiene un perfil distinto y éste ayuda a determinar el
              riesgo que adquiere la institución financiera al otorgarle un
              préstamo —por ejemplo, si tiene muchos compromisos financieros o
              si suele atrasarse en sus pagos—.
            </tr>
          </td>
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>¿Qué variables se toman en cuenta?</h2>
        <p>
          <ul>
            <li>Capacidad de pago.</li>
            <li>
              Historial crediticio (score, número de cuentas activas, préstamos
              personales abiertos, atrasos mayores a 100 días, entre otros).
            </li>
            <li>Antecedentes de PLD (Prevención de Lavado de Dinero).</li>
            <li>Régimen fiscal (asalariado, servicios profesionales o RIF).</li>
            <li> Antigüedad laboral.</li>
            <li> Escolaridad máxima.</li>
            <li>
              Acceso al SAT. Smart Lending, la primera hipoteca digital en
              México, solicita acceso al SAT para importar información sobre los
              ingresos de manera automática. Aunque esto es opcional, puede
              derivar en una mejor tasa. Cabe mencionar que están avalados por
              la Condusef y la Comisión Nacional Bancaria y de Valores, lo que
              los hace 100% confiables. Puedes estar seguro que tus datos están
              completamente protegidos.
            </li>
          </ul>
        </p>
      </Container>
    </Skeleton>
  );
};

export default Services;
