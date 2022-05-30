import { Link } from 'react-router-dom';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './LeftSide.styles';

type LeftLink = {
  text: string;
  route: string;
};

const leftLinks: LeftLink[] = [
  {
    text: 'Inicio',
    route: '/',
  },
  {
    text: 'Compra',
    route: '/buy',
  },
  {
    text: 'Construir',
    route: '/build',
  },
  {
    text: 'Venta',
    route: '/sale',
  },
  {
    text: 'Mudanzas',
    route: '/moving',
  },
  {
    text: 'Seguros',
    route: '/insurance',
  },
  {
    text: 'Contactos',
    route: '/contacts',
  },
];

const LeftSide = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container
      flexDirection={isLarge ? 'row' : 'column'}
      justifyContent="center"
      alignItems="center"
      style={styles.container}
    >
      <Image
        src="/assets/header/logotipo.png"
        alt="Logo"
        width={isLarge ? 40 : 30}
        height={isLarge ? 41 : 31}
        style={styles.logo}
      />
      <ul style={styles.ulContainer}>
        {leftLinks.map(({ text, route }, i) => (
          <Link to={route} style={styles.link}>
            <li style={styles.li}>{text}</li>
            {i !== leftLinks.length - 1 && isLarge && (
              <span style={styles.dot}>:</span>
            )}
          </Link>
        ))}
      </ul>
    </Container>
  );
};

export default LeftSide;
