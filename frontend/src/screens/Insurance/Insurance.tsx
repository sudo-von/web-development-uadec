import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import handleStyles from './Insurance.styles';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';

const Insurance = () => {
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
        <h1 style={styles.title}>Seguros</h1>
        <p style={styles.paragraph}>
          Contamos con las coberturas principales de los seguros para las
          inmobiliarias.
        </p>
        <ol style={styles.paragraph}>
          <li>Robo de objetos de valor dentro de la oficina inmobiliaria.</li>
          <li>Daños en la inmobiliaria por vandalismo o huelguista.</li>
          <li>
            Daños anuncios luminoso (anuncios, carteles publicitarios,…) dentro
            o fuera de la inmobiliaria.
          </li>
          <li>Daños en instalaciones y aparatos eléctricos.</li>
          <li>
            Daños en cristales, lunas, espejos, vitrinas, expositores, etc.
          </li>
          <li>Cobertura contra incendios, explosión y/o rayo.</li>
          <li>
            Daños causados por fenómenos hidrometeorológicos (granizo, ciclón,
            huracán, etc.).
          </li>
          <li>Daños por terremoto y/o erupción volcánica.</li>
          <li>
            Indemnización por la paralización de la actividad debido a algún
            daño material.
          </li>
          <li>Servicio de Asistencia Informática (SAI)</li>
          <li>Responsabilidad civil</li>
          <li>Defensa jurídica y asistencia legal.</li>
          <li>
            Asistencia en el comercio (plomería, cerrajería y electricista).
          </li>
        </ol>
      </Container>
    </Skeleton>
  );
};

export default Insurance;
