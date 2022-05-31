import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Moving.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Moving = () => {
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
          ¿Acabas de comprar una casa nueva y te preocupa que todo salga bien en
          la mudanza?
        </h1>
        <h3 style={styles.title}>SERVICIO DE MUDANZAS Y FLETES EXPRESS</h3>
        <p style={styles.paragraph}>
          Comprometidos en ofrecer un servicio de calidad, con nosotros tu
          traslado será una experiencia positiva. Tenemos más de 10 Años de
          experiencia que respaldan nuestro profesionalismo y calidad, así como
          nuestras unidades y el personal de la empresa. Permítenos ayudarte y
          cuidar lo que sabemos que es importante para ti!
        </p>
        <table>
          <tr>
            <td>
              <h3 style={styles.title}>Todos nuestros servicios incluyen</h3>
              <ol style={styles.text}>
                <li>Incluye 3 cargadores </li>
                <li>Herramienta para maniobras</li>
                <li>Maniobras de carga y descarga</li>
                <li>Ten a la mano los documentos y objetos importantes</li>
                <li>Rampa y bandas para maniobra</li>
              </ol>
            </td>
            <td>
              <Image
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_514,h_289/https://www.mudanzascartagena.com.co/wp-content/uploads/camion-encabezado-compressed.jpg"
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

export default Moving;
