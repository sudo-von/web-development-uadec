import { Link } from 'react-router-dom';
import Container from 'src/components/Container/Container';
import useMediaQuery from 'src/hooks/useMediaQuery';
import TransparentButton from '../TransparentButton/TransparentButton';
import handleStyles from './TopNavside.styles';

type TransparentButtonLink = {
  text: string;
  route: string;
};

const buttons: TransparentButtonLink[] = [
  {
    text: 'COMPRA',
    route: '/buy',
  },
  {
    text: 'CONSTRUIR',
    route: '/build',
  },
  {
    text: 'VENTA',
    route: '/sale',
  },
  {
    text: 'MUDANZAS',
    route: '/moving',
  },
  {
    text: 'SEGUROS',
    route: '/insurance',
  },
  {
    text: 'CONTACTOS',
    route: '/contacts',
  },
];

const TopNavside = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection={isLarge ? 'column' : 'row'}
      justifyContent="flex-start"
      style={styles.container}
    >
      {buttons.map(({ text, route }) => (
        <TransparentButton style={styles.transparentButton}>
          <Link to={route} style={styles.link}>
            {text}
          </Link>
        </TransparentButton>
      ))}
    </Container>
  );
};

export default TopNavside;
