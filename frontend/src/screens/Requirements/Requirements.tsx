import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './Requirements.styles';

const Requirements = () => {
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
          ¿Cuáles son los documentos para comprar una casa?
        </h1>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>Título de propiedad</h2>
        <p>
          Toda propiedad debe estar inscrita en el Registro Público de la
          Propiedad para contar con el derecho sobre el inmueble, por lo tanto,
          este es uno de los documentos para comprar una casa que se debe
          entregar al notario para poder confirmar al propietario actual de la
          vivienda. Si bien, este no es un documento que te corresponda al
          comprador debera asegurarse de que este documento se encuentra en
          orden y de que se le entreguo al notario para poder continuar con el
          proceso de compraventa.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>Boletas de predial y agua</h2>
        <p>
          Al igual, el vendedor deberá comprobar que no existan adeudos del
          inmueble. Para esto, se deberá hacer entrega de las boletas de pago
          del consumo de predial y de agua de los últimos 5 años. Asegurarse de
          que la casa no cuente con gravámenes, es decir que esté libre de
          deudas de alguna hipoteca vigente.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>Avalúo vigente</h2>
        <p>
          El avalúo es la estimación precisa del valor de un inmueble realizado
          por un experto. Este es un paso importante y un requisito en el
          proceso de compra de una casa. El avalúo dará la certeza de que el
          inmueble se encuentra en buenas condiciones para habitarlo y que se
          está vendiendo a un precio justo de acuerdo a sus características. El
          avalúo se presenta mediante un documento confidencial, el cual también
          deberá ser entregado al notario para realizar la compraventa del
          inmueble.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>Documentos personales de identificación</h2>
        <p>
          En el caso de la compraventa de vivienda, tanto a usted como al les
          corresponderá entregar su acta de nacimiento y su identificación
          oficial. Por su parte, en caso de estar casado y ser un crédito
          mancomunado, deberá entregar también el acta e identificación de su
          conyuge, así como su acta de matrimonio.
        </p>
      </Container>
    </Skeleton>
  );
};

export default Requirements;
