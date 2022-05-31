import useMediaQuery from 'src/hooks/useMediaQuery';
import Skeleton from 'src/components/Skeleton/Skeleton';
import Container from 'src/components/Container/Container';
import handleStyles from './PrivacyPolicies.styles';

const PrivacyPolicies = () => {
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
        <h1 style={styles.title}>Política de Privacidad</h1>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <p style={styles.paragraph}>
          En cumplimiento a lo previsto en la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (la “Ley de Protección de
          Datos Personales”), Dridco México, S.A. de C.V. (antes Mercado IM,
          S.A. de C.V.) (“Bienes raices multicasa”) con domicilio en Av.
          Ejército Nacional 350 – 5, Polanco, Quinta Sección, Miguel Hidalgo,
          C.P. 11560 Ciudad de México, México; es responsable del tratamiento de
          sus los Datos Personales proporcionados, mismos que se compromete a
          tratar en apego a los principios establecidos en el artículo 6 de la
          Ley de Protección de Datos Personales y de conformidad con las
          finalidades establecidas en el presente aviso de privacidad (“Aviso de
          Privacidad”). Para el ejercicio de los derechos que les concede la Ley
          de Protección de Datos Personales, así como, limitar el uso o
          divulgación de sus datos personales, los Titulares (según se definen
          en el artículo 3 fracción XVII de la Ley de Protección de Datos
          Personales) podrán contactar a Bienes raices multicasa mediante correo
          electrónico dirigido a: info@inmuebles24.com o escrito dirigido a: Av.
          Ejército Nacional 350 – 5, Polanco, Quinta Sección, Miguel Hidalgo,
          C.P. 11560 Ciudad de México, México.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}> NUESTRO COMPROMISO CON LA PRIVACIDAD</h2>
        <p style={styles.paragraph}>
          Las empresas indicadas en la cláusula 12, sus empresas afiliadas,
          subsidiarias o controladoras de Bienes raices multicasa, respetan la
          privacidad de toda persona que visite el sitio web enunciado en la
          cláusula 12 (en adelante, el “Sitio Web”). Este Aviso de Privacidad
          indica la información que Bienes raices multicasa puede recopilar y el
          uso que puede dar a esa información. También explica las medidas de
          seguridad tomadas para proteger su información, su posibilidad de
          acceder a su información, y a quién podrá contactar en Bienes raices
          multicasa para que sus preguntas en relación con este Aviso de
          Privacidad sean contestadas.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}>COMPARTIENDO SU INFORMACIÓN.</h2>
        <p style={styles.paragraph}>
          La Información Personal que usted suministre será reputada y tratada
          como confidencial. Sin perjuicio de lo expuesto, Bienes raices
          multicasa podrá compartir total o parcialmente la Información Personal
          suministrada por usted, incluyendo registros de comportamiento y
          actividad en el Sitio Web, a terceros que anuncien u ofrezcan
          productos o servicios en o a través del Sitio Web, parámetros de
          interés de búsquedas así como su historial de búsqueda y preferencias
          a empresas del grupo Bienes raices multicasa, así como a aliados y
          colaboradores y anunciantes del Sitio Web, entidades financieras y
          compañías de seguro de primera línea y reconocida trayectoria con la
          finalidad de proveerle ofertas, anuncios e información que se ajusten
          en la mayor medida posible a sus expectativas y preferencias. Bienes
          raices multicasa también podrá transferir sus datos personales en los
          casos específicamente previstos en la Ley.
        </p>
      </Container>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h2 style={styles.title}> LINKS EXTERNOS.</h2>
        <p style={styles.paragraph}>
          El Sitio Web puede contener links hacia y provenientes de otros sitios
          de Internet. Bienes raices multicasa no es responsable por las
          prácticas de privacidad ni el tratamiento de los datos personales de
          esos sitios. Bienes raices multicasa recomienda que consulten las
          prácticas de privacidad de dichos sitios de Internet antes de su
          utilización.
        </p>
      </Container>
    </Skeleton>
  );
};

export default PrivacyPolicies;
