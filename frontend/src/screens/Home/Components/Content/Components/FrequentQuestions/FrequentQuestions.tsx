import { Link } from 'react-router-dom';
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
        <Link to="/frequent-questions/faq">
          <p style={styles.paragraph}>
            <GreenArrow /> Preguntas Frecuentes
          </p>
        </Link>
        <Link to="/frequent-questions/tips">
          <p style={styles.paragraph}>
            <GreenArrow /> Tips Para Antes De Comprar
          </p>
        </Link>
      </div>
      <div style={styles.policiesContainer}>
        <Link to="/frequent-questions/quality-policies">
          <p style={styles.paragraph}>
            <GreenArrow /> Políticas De Calidad
          </p>
        </Link>
        <Link to="/frequent-questions/iso">
          <p style={styles.paragraph}>
            <GreenArrow /> ISO:9001-2012
          </p>
        </Link>
      </div>
    </Container>
  );
};

export default FrequentQuestions;
