import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Iso.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Iso = () => {
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
        <h1 style={styles.title}>ISO 9001 SISTEMAS DE GESTIÓN DE LA CALIDAD</h1>
        <p style={styles.paragraph}>
          La norma Internacional ISO 9001 está enfocada a la consecución de la
          calidad en una organización mediante la implementación de un método o
          Sistema de Gestión de la calidad (SGC). Esta norma se ha convertido
          desde el año 2002 en un referente de la calidad a nivel mundial con
          más de Un millón de empresas certificadas.
        </p>
        <h3 style={styles.text}>Contamos:</h3>
        <p style={styles.paragraph}>
          En el sector inmobiliario, la empresa Creativa, Constructora e
          Inmobiliaria, es la primera en conseguir dicha certificación, lo que
          que garantiza que sus clientes tendrán una edificación con los
          materiales, talento humano calificado y un servicio de producción,
          venta y posventa con un enfoque de mejora continua.
        </p>
        <p style={styles.paragraph}>
          Al ser la primera organización en obtener la certificación ISO 9001
          2012 es un motivo de orgullo para seguir construyendo las
          edificaciones bien ubicadas, resistentes a los desastres naturales y
          con bellos acabados, que brindan confort y seguridad en el futuro de
          los habitantes de la casa que se realizan en diferentes distritos.
        </p>
        <p style={styles.paragraph}>
          Con la norma ISO 9001 2012 se asegura que los proyectos han sido
          elaborados por profesionales de primera línea y son sometidos a una
          revisión exhaustiva por los entes jurisdiccionales, como los
          municipios, colegio de arquitectos y de ingenieros, que lo avalan.
        </p>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcRyn46VHEngL-5VZbwHwhZp8Ev5w8niaVShaulMAYrh6Wkoa8YW88qdD5Aa0oJlT1k4&usqp=CAU"
          alt="Mission"
          height={250}
          width={250}
        />
      </Container>
    </Skeleton>
  );
};

export default Iso;
