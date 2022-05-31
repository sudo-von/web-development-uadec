import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './Contact.styles';

const Contact = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Skeleton>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h1 style={styles.title}>¿Cómo podemos ayudarte?</h1>
        <p>
          Por favor completa el formulario y envíanos tu sugerencia, no hay nada
          que nos importe más que tu opinión!
        </p>
        <form action="">
          <div style={styles.inputContainer}>
            <p style={styles.label}>Nombre</p>
            <Input
              style={styles.input}
              id="range"
              value=""
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Email</p>
            <Input
              style={styles.input}
              id="range"
              value=""
              placeholder="Ingresa tu email"
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Mensaje</p>
            <Input
              style={styles.input}
              id="range"
              value=""
              placeholder="Ingresa tu mensaje"
            />
          </div>
          <Container justifyContent="center" style={styles.buttonContainer}>
            <Button>Enviar sugerencia</Button>
          </Container>
        </form>
      </Container>
    </Skeleton>
  );
};

export default Contact;
