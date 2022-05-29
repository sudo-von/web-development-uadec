import handleStyles from 'src/components/Navbar/Components/Menu/Menu.styles';
import Button from 'src/components/Navbar/Components/Menu/Components/Button/Button';
import SmallButton from 'src/components/Navbar/Components/Menu/Components/SmallButton/SmallButton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import Container from 'src/components/Container/Container';

const leftButtons = [
  'Inicio',
  'La Compañía',
  'Servicios',
  'Requisitos',
  'Contactos',
];

const Menu = () => {
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
        {leftButtons.map((button) => (
          <Button style={styles.button}>{button}</Button>
        ))}
      </Container>
      <Container
        justifyContent="center"
        alignItems="center"
        style={styles.rightMenu}
      >
        <SmallButton marginLeft={6} marginRight={18}>
          Inicio
        </SmallButton>
        <SmallButton marginLeft={4} marginRight={17}>
          Buscar
        </SmallButton>
        <SmallButton marginLeft={4} marginRight={8}>
          Admin .
        </SmallButton>
      </Container>
    </Container>
  );
};

export default Menu;
