import styles from 'src/components/Navbar/Components/Menu/Menu.styles';
import Button from 'src/components/Navbar/Components/Menu/Components/Button/Button';
import SmallButton from 'src/components/Navbar/Components/Menu/Components/SmallButton/SmallButton';

const leftButtons = [
  'Inicio',
  'La Compañía',
  'Servicios',
  'Requisitos',
  'Contactos',
];

const Menu = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftMenu}>
        {leftButtons.map((button) => (
          <Button>{button}</Button>
        ))}
      </div>
      <div style={styles.rightMenu}>
        <SmallButton marginLeft={6} marginRight={18}>
          Inicio
        </SmallButton>
        <SmallButton marginLeft={4} marginRight={17}>
          Buscar
        </SmallButton>
        <SmallButton marginLeft={4} marginRight={8}>
          Admin .
        </SmallButton>
      </div>
    </div>
  );
};

export default Menu;
