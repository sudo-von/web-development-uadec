import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './RightSide.styles';

const RightSide = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.container}>
      <p style={styles.p}>Bienes Raíces MultiCasa © 2012</p>
      <p style={styles.link}>Políticas De Privacidad</p>
    </div>
  );
};

export default RightSide;
