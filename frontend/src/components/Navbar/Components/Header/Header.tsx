import Container from 'src/components/Container/Container';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './Header.styles';

const Header = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection={isLarge ? 'row' : 'column'}
      alignItems="center"
      justifyContent={isLarge ? 'space-between' : 'flex-start'}
    >
      <Container
        style={styles.logoContainer}
        justifyContent={isLarge ? 'flex-start' : 'center'}
        alignItems="center"
      >
        <img
          width={isLarge ? 40 : 30}
          height={isLarge ? 41 : 31}
          src="assets/header/logotipo.png"
          alt="header"
          style={styles.logo}
        />
        <Container flexDirection="column" style={styles.multihouse}>
          <img
            width={isLarge ? 377 : 307}
            height={isLarge ? 23 : 23}
            src="assets/header/Bienes Raices mULTIcASA.png"
            alt="header"
          />
          <img
            style={styles.bestOption}
            src="assets/header/Tu mejor opcion en agencia de bienes raices.png"
            alt="header"
          />
        </Container>
      </Container>
      <Container
        alignItems="center"
        justifyContent={isLarge ? 'space-evenly' : 'center'}
        style={styles.telephoneContainer}
      >
        <img
          src="assets/header/bloque_call_now/telefono.png"
          alt="telephone"
          style={styles.telephone}
        />
        <img
          src="assets/header/bloque_call_now/LLama al_ 1-800-123-4567.png"
          alt="call now 1-800-123-4567"
        />
      </Container>
    </Container>
  );
};

export default Header;
