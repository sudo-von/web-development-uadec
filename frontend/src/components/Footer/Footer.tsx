import LeftSide from './Components/LeftSide/LeftSide';
import RightSide from './Components/RightSide/RightSide';
import styles from './Footer.styles';

const Footer = () => (
  <div style={styles.container}>
    <LeftSide />
    <RightSide />
  </div>
);

export default Footer;
