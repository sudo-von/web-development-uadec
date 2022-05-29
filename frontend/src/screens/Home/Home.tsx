import Container from 'src/components/Container/Container';
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';
import useMediaQuery from 'src/hooks/useMediaQuery';
import Content from 'src/screens/Home/Components/Content/Content';
import Navside from 'src/screens/Home/Components/Navside/Navside';
import handleStyles from 'src/screens/Home/Home.styles';

const Home = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={styles.homeContainer}
    >
      <Navbar />
      <Container
        flexDirection={isLarge ? 'row' : 'column-reverse'}
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <Content />
        <Navside />
      </Container>
      <hr style={styles.blackLine} />
      <Footer />
    </Container>
  );
};

export default Home;
