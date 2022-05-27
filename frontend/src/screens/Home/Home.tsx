import Navbar from 'src/components/Navbar/Navbar';
import Content from 'src/screens/Home/Components/Content/Content';
import styles from 'src/screens/Home/Home.styles';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.contentContainer}>
        <Content />
      </div>
    </div>
  );
};

export default Home;
