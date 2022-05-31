import useMediaQuery from 'src/hooks/useMediaQuery';
import LeftSide from './Components/LeftSide/LeftSide';
import RightSide from './Components/RightSide/RightSide';
import handleStyles from './Footer.styles';

const Footer = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.container}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Footer;
