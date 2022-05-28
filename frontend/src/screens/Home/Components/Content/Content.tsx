import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import styles from 'src/screens/Home/Components/Content/Content.styles';
import Services from 'src/screens/Home/Components/Content/Components/Services/Services';
import FrequentQuestions from 'src/screens/Home/Components/Content/Components/FrequentQuestions/FrequentQuestions';

const Content = () => {
  return (
    <div style={styles.contentContainer}>
      <Image
        src="assets/bg_body_slice/boca-raton-exterior.jpg"
        alt="House wallpaper"
        width={771}
        height={225}
        style={styles.house}
      />
      <Container justifyContent="center">
        <Image
          src="assets/bg_body_slice/welcome.png"
          alt="Welcome logo"
          width={234}
          height={33}
          style={styles.welcome}
        />
      </Container>
      <Container
        justifyContent="flex-start"
        alignItems="center"
        style={styles.smallHousesContainer}
      >
        <Image
          src="assets/bg_body_slice/small_houses.png"
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
