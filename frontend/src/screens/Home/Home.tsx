import Container from 'src/components/Container/Container';
import Footer from 'src/components/Footer/Footer';
import Image from 'src/components/Image/Image';
import Navbar from 'src/components/Navbar/Navbar';
import Content from 'src/screens/Home/Components/Content/Content';
import Navside from 'src/screens/Home/Components/Navside/Navside';
import styles from 'src/screens/Home/Home.styles';

const Home = () => {
  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar />
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <Content />
          <Navside />
        </div>
        <Image
          alt="Black line"
          src="assets/footer/black_line.png"
          width={1002}
          height={5}
          style={styles.blackLine}
        />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
