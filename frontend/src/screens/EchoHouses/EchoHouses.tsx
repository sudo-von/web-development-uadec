import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './EchoHouses.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const EchoHouses = () => {
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
        <h1 style={styles.title}>Nuevo Convenio A Casas Ecológicas.</h1>
        <h2 style={styles.title}>
          Preparan construcción de dos mil casas ecológicas en Chihuahua
        </h2>
        <h3 style={styles.title}>
          A través de un convenio de colaboración con 27 municipios, se
          construirán viviendas ecológicas; contemplando una ampliación de 2 mil
          2 mil inmuebles más hacia 2020.
        </h3>
        <p style={styles.paragraph}>
          Carlos Borruel Baquera, director de la Comisión Estatal de Vivienda,
          Suelo e Infraestructura (Coesvi) de Chihuahua, especificó que este
          esquema se enfocará en la sierra, en las comunidades indígenas y en
          municipios pequeños y medios, a favor de familias que no tienen acceso
          a créditos de vivienda. Los municipios participantes son
          Cusihuiriachi, Carichí, Gómez Farías, Aldama, Ojinaga, Guerrero,
          Madera, Bachíniva, Coronado, Guachochi, Nonoava, Dr. Belisario
          Domínguez, Meoqui, Camargo, Coyame del Sotol, Saucillo, Riva Palacio,
          Matamoros, San Francisco de Borja, Chínipas, Ignacio Zaragoza,
          Bocoyna, Práxedis G. Guerrero, Juárez, Guadalupe y Calvo, Jiménez.
        </p>
        <p style={styles.paragraph}>
          El funcionario estatal adelantó que en próximos días se firmará un
          convenio con el Fondo de la Vivienda del Instituto de Seguridad y
          Servidos Sociales de los Trabajadores del Estado (Fovissste), para
          construir vivienda vertical por primera vez en la historia de ese
          estado.
        </p>
        <p style={styles.paragraph}>
          Este sistema facilitará que la gente acuda a centros de trabajo y de
          diversión sin utilizar el automóvil; lo cual concreta el plan de
          movilidad urbana. Será un edificio de cuatro niveles, con 30
          viviendas, en inicio. Cabe mencionar que antes se construían viviendas
          de 43 metros cuadrados en esa entidad; y actualmente, de 56 metros y,
          de acuerdo a la proyección financiera, podrían alcanzar los 60 o 66
        </p>

        <Image
          src="https://inarquia.es/wp-content/uploads/2020/03/43bd1426b89afed2c0c586c97dc6a8e3-min.jpg"
          alt="Mission"
          height={250}
          width={500}
        />
      </Container>
    </Skeleton>
  );
};

export default EchoHouses;
