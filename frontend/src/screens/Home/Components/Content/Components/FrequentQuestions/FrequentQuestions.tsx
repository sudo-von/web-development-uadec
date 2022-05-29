import Container from 'src/components/Container/Container';
import GreenArrow from 'src/components/GreenArrow/GreenArrow';
import styles from './FrequentQuestions.styles';

const FrequentQuestions = () => {
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      style={styles.frequentQuestionsContainer}
    >
      <div>
        <p style={styles.paragraph}>
          <GreenArrow /> Preguntas Frecuentes
        </p>
        <p style={styles.paragraph}>
          <GreenArrow /> Tips Para Antes De Comprar
        </p>
      </div>
      <div style={styles.policiesContainer}>
        <p style={styles.paragraph}>
          <GreenArrow /> Políticas De Calidad
        </p>
        <p style={styles.paragraph}>
          <GreenArrow /> ISO:9001-2012
        </p>
      </div>
    </Container>
  );
};

export default FrequentQuestions;
