import Menu from 'src/components/Navbar/Components/Menu/Menu';
import Header from 'src/components/Navbar/Components/Header/Header';
import styles from './Navbar.styles';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Header />
      <Menu />
    </div>
  );
};

export default Navbar;
