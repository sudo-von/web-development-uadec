import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Buy.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Buy = () => {
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
        <h1 style={styles.title}>¿Quieres comprar una propiedad?</h1>
        <h2 style={styles.title}>¡Consulta a nuestros asesores!</h2>
        <p style={styles.paragraph}>
          Bienes Raices Multicasa es la empresa que más vende en México y en el
          mundo. Contamos con varios tipos de propiedad (Casa, Departamento,
          Casa en condominio, Local Comercial) cada uno de ellos cuanta con
          diferente cantidad de recamaras, como también proporcionan diferentes
          caracteristicas por ejemplo la cantidad de baños, Número de
          estacionamientos, Seguridad integrada o Cocina integaral.
        </p>
        <table>
          <tr>
            <td>
              <h3 style={styles.text}>
                Bienes Raices Multicasa se encuentra en toda la República
                Méxicana
              </h3>
            </td>
            <td>
              <Image
                src="https://venturadistrict.com/wp-content/uploads/2020/08/Architecture-Vertical-pics-06-576x1024.jpg"
                alt="Mission"
                height={250}
                width={250}
              />
            </td>
          </tr>
        </table>
      </Container>
    </Skeleton>
  );
};

export default Buy;
