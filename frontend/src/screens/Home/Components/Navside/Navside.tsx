import MidNavside from './Components/MidNavside/MidNavside';
import TopNavside from './Components/TopNavside/TopNavside';
import BottomNavside from './Components/BottomNavside/BottomNavside';
import styles from './Navside.styles';

const Navside = () => {
  return (
    <div style={styles.container}>
      <TopNavside />
      <MidNavside />
      <BottomNavside />
    </div>
  );
};

export default Navside;
