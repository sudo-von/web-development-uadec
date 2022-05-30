import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './Company.styles';
import Image from 'src/components/Image/Image';

const Company = () => {
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
        <h1 style={styles.title}>¿Quienes somos?</h1>
        <p>
          Somos una empresa orgullosamente saltillense líder en el ramo de la
          las bienes raices. Vendemos casas en fraccionamientos en zonas de alta
          plusvalía donde fusionamos la armonía entre diseño arquitectónico,
          bienestar y comodidad. Logrando con ello ambientes inigualables de
          seguridad y tranquilidad que nuestros clientes necesitan para vivir.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <Image
          src="https://www.pdcahome.com/wp-content/uploads/2012/10/mision-blog.png"
          alt="Mission"
          height={150}
          width={150}
        />
        <h2 style={styles.title}>Misión</h2>
        <p>
          Ser una empresa en el ramo de los bienes raíces comprometida
          socialmente con nuestros clientes, socios, colaboradores y
          proveedores.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <Image
          src="https://www.uv.mx/veracruz/odontologia/files/2013/02/vision.png"
          alt="Mission"
          height={150}
          width={150}
        />
        <h2 style={styles.title}>Visión</h2>
        <p>
          Ser una empresa sustentable e innovadora en proyectos arquitectónicos
          de vivienda y fraccionamientos que se distinga por su calidad de
          diseño y construcción, manteniendo el liderazgo en estos conceptos en
          la región sureste de Coahuila.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <Image
          src="https://valaaguelaquesipuedo.com/wp-content/uploads/2017/05/valores.png"
          alt="Mission"
          height={108}
          width={280}
        />
        <h2 style={styles.title}>Valores</h2>
        <p>
          Nos caracterizamos por tener una ética empresarial impecable. Damos
          énfasis en valores como respeto, honestidad, responsabilidad y trabajo
          en equipo.
        </p>
      </Container>
    </Skeleton>
  );
};

export default Company;
