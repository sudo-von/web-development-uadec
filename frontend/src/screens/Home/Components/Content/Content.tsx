import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import handleStyles from 'src/screens/Home/Components/Content/Content.styles';
import Services from 'src/screens/Home/Components/Content/Components/Services/Services';
import FrequentQuestions from 'src/screens/Home/Components/Content/Components/FrequentQuestions/FrequentQuestions';
import useMediaQuery from 'src/hooks/useMediaQuery';
import ImageGallery from 'react-image-gallery';
import './Content.css';

const images = [
  {
    original: '/assets/bg_body_slice/boca-raton-exterior.jpg',
    originalHeight: 255,
    originalWidth: 771,
  },
  {
    original: '/assets/bg_body_slice/house-1.jpg',
    originalHeight: 255,
    originalWidth: 771,
  },
  {
    original: '/assets/bg_body_slice/house-2.jpg',
    originalHeight: 255,
    originalWidth: 771,
  },
];

const Content = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.contentContainer}>
      <ImageGallery items={images} />
      <Container justifyContent="center">
        <Image
          src="/assets/bg_body_slice/welcome.png"
          alt="Welcome logo"
          width={234}
          height={33}
          style={styles.welcome}
        />
      </Container>
      <Container
        flexDirection={isLarge ? 'row' : 'column'}
        justifyContent={isLarge ? 'flex-start' : 'center'}
        alignItems="center"
        style={styles.smallHousesContainer}
      >
        <Image
          src="/assets/bg_body_slice/small_houses.png"
          alt="Small houses"
          width={159}
          height={142}
          style={styles.smallHouses}
        />
        <p style={styles.paragraph}>
          Hello. In this tutorial i will show you how to create an elegant
          WordPress PSD theme. You can use this web template also for consulting
          agency templates, services websites, marketing website templates,
          business website templates, finance website templates. The design is
          very clean and can be modified very easy into a great template.
        </p>
      </Container>
      <Services />
      <FrequentQuestions />
    </div>
  );
};

export default Content;
