import { Link } from 'react-router-dom';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './RightSide.styles';

const RightSide = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.container}>
      <Link to="/privacy-policies" style={styles.link}>
        <p style={styles.p}>Bienes Raíces MultiCasa © 2012</p>
        <p style={styles.policies}>Políticas De Privacidad</p>
      </Link>
    </div>
  );
};

export default RightSide;
