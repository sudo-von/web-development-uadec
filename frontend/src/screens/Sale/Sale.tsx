import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Sale.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Sale = () => {
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
        <h1 style={styles.title}>¿Quieres adquirir o vender una propiedad?</h1>
        <h2 style={styles.title}>¡Consulta a nuestros asesores!</h2>
        <p style={styles.paragraph}>
          Bienes Raices Multicasa es la empresa que más vende en México y en el
          mundo. Los Agentes Inmobiliarios ayudan a millones de personas a
          comprar, rentar o vender propiedades. Contamos con departamentos,
          oficinas , terrenos y otros inmuebles en venta y renta.
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
                src="https://lahaus.imgix.net/uploads/real_estate_attachment/picture/6214167/aria_departamentos_en_venta_en_centro_de_monterrey_de_1_3_hab_cover_c00bc0d6490933f2d8f2.jpg?auto=compress%2Cenhance%2Cformat&q=40&w=auto&h=700&fit=clip&crop=edges"
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

export default Sale;
