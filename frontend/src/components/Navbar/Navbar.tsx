import Menu from 'src/components/Navbar/Components/Menu/Menu';
import Header from 'src/components/Navbar/Components/Header/Header';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './Navbar.styles';

const Navbar = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.navbar}>
      <Header />
      <Menu />
    </div>
  );
};

export default Navbar;
