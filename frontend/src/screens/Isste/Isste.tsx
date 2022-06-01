import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Isste.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Isste = () => {
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
          Conoce Nuestros Planes de Descuento Para los Trabajadores Del ISSTE
        </h1>
        <p style={styles.paragraph}>
          Por primera vez, Quiero Casa realiza su “Home Sale”, donde los
          internautas interesados en la adquisición de un departamento en la
          Ciudad de México, tendrán la oportunidad de encontrar diversas
          opciones de viviendas con grandes descuentos en la página de internet
          de la comercializadora, en cualquiera de sus tres marcas, durante la
          semana del 21 de mayo al 31 de junio, siendo la primer inmobiliaria en
          a la fiebre de venta en línea.
        </p>
        <h2 style={styles.title}> Inmuebles con Descuentos Irresistibles</h2>
        <p style={styles.paragraph}>
          Llama a nuestro Call Center y pide que te canalicen con el ejecutivo
          del inmueble que te interesa.
        </p>
        <h2 style={styles.title}>Tenemos las mejores ubicaciones</h2>
        <p style={styles.paragraph}>
          Revisa nuestro inventario de Guanajuato, Guerrero, Morelos, Sonora,
          Tabasco, Tamaulipas y Veracruz.
        </p>
      </Container>
    </Skeleton>
  );
};

export default Isste;
