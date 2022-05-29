import Footer from 'src/components/Footer/Footer';
import Image from 'src/components/Image/Image';
import Navbar from 'src/components/Navbar/Navbar';
import Content from 'src/screens/Home/Components/Content/Content';
import styles from 'src/screens/Home/Home.styles';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.contentContainer}>
        <Content />
        <Image
          alt="Black line"
          src="assets/footer/black_line.png"
          width={1002}
          height={5}
          style={styles.blackLine}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
