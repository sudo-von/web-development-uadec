import MidNavside from './Components/MidNavside/MidNavside';
import TopNavside from './Components/TopNavside/TopNavside';
import BottomNavside from './Components/BottomNavside/BottomNavside';
import handleStyles from './Navside.styles';
import useMediaQuery from 'src/hooks/useMediaQuery';

const Navside = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.container}>
      <TopNavside />
      <MidNavside />
      <BottomNavside />
    </div>
  );
};

export default Navside;
