import Image from 'src/components/Image/Image';
import ViewMore from 'src/components/ViewMore/ViewMore';
import styles from './Services.styles';

const Services = () => {
  return (
    <div style={styles.servicesContainer}>
      <p style={styles.paragraph}>
        Hello. In this tutorial i will show you how to create an elegant
        WordPress PSD theme. You can use this web template also for consulting
        agency templates, services websites, marketing website templates,
        business website templates, finance website templates. The design is
        very clean and can be modified very easy into a great template..
      </p>
      <br />
      <Image
        src="assets/bg_body_slice/services.png"
        alt="Services"
        width={161}
        height={12}
        style={styles.services}
      />
      <div>
        <p style={styles.paragraph}>
          Hello. In this tutorial i will show you how to create an elegant
          WordPress PSD theme. You can use this web template also for consulting
          agency templates, services websites, marketing website templates,
          business website templates, finance website templates. The design is
          very clean and can be modified very easy into a great template..
        </p>
        <ViewMore />
      </div>
      <div style={styles.paragraphContainer}>
        <p style={styles.paragraph}>
          Hello. In this tutorial i will show you how to create an elegant
          WordPress PSD theme. You can use this web template also for consulting
          agency templates, services websites, marketing website templates,
          business website templates, finance website templates. The design is
          very clean and can be modified very easy into a great template..
        </p>
        <ViewMore />
      </div>
    </div>
  );
};

export default Services;
