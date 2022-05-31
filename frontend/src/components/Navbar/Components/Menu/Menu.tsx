import handleStyles from 'src/components/Navbar/Components/Menu/Menu.styles';
import Button from 'src/components/Navbar/Components/Menu/Components/Button/Button';
import SmallButton from 'src/components/Navbar/Components/Menu/Components/SmallButton/SmallButton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import Container from 'src/components/Container/Container';
import { Link } from 'react-router-dom';
import { useAuth } from 'src/contexts/auth.context';

type LeftButton = {
  text: string;
  route: string;
};

const leftButtons: LeftButton[] = [
  {
    text: 'Inicio',
    route: '/',
  },
  {
    text: 'La Compañia',
    route: '/company',
  },
  {
    text: 'Servicios',
    route: '/services',
  },
  {
    text: 'Requisitos',
    route: '/requirements',
  },
  {
    text: 'Contactos',
    route: '/contacts',
  },
];

const Menu = () => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection={isLarge ? 'row' : 'column'}
      justifyContent={isLarge ? 'space-between' : 'flex-start'}
      style={styles.container}
    >
      <Container
        style={styles.leftMenu}
        justifyContent={isLarge ? 'flex-start' : 'center'}
      >
        {leftButtons.map(({ text, route }) => (
          <Button style={styles.button}>
            <Link to={route} style={styles.link}>
              {text}
            </Link>
          </Button>
        ))}
      </Container>
      <Container
        justifyContent="center"
        alignItems="center"
        style={styles.rightMenu}
      >
        <Link to="/" style={styles.link}>
          <SmallButton marginLeft={6} marginRight={18}>
            Inicio
          </SmallButton>
        </Link>
        <Link to="/search" style={styles.link}>
          <SmallButton marginLeft={4} marginRight={17}>
            Buscar
          </SmallButton>
        </Link>
        {isLoggedIn ? (
          <Link to="/logout" style={styles.link}>
            <SmallButton marginLeft={4} marginRight={8}>
              Cerrar sesión
            </SmallButton>
          </Link>
        ) : (
          <Link to="/admin" style={styles.link}>
            <SmallButton marginLeft={4} marginRight={8}>
              Admin .
            </SmallButton>
          </Link>
        )}
      </Container>
    </Container>
  );
};

export default Menu;
