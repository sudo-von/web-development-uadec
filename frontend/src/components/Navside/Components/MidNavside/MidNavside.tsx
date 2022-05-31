import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import Input from 'src/components/Input/Input';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './MidNavside.styles';

const MidNavside = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <Image
          src="/assets/buscador/img_lupa.png"
          alt="Search"
          height={41}
          width={39}
        />
        <Image
          style={styles.searchImage}
          src="/assets/buscador/Encuentra.png"
          alt="Search"
          height={30}
          width={154}
        />
      </div>
      <form>
        <Container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={styles.formContainer}
        >
          <div style={styles.cityContainer}>
            <label style={styles.label} htmlFor="city">
              Ciudad y Estado, o C.P.
            </label>
            <Input style={styles.input} id="city" value="" />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="range">
              Rango de Busquéda
            </label>
            <Input
              style={styles.input}
              id="range"
              value=""
              placeholder="Sin rango"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="price">
              Rango De Precio De: - A:
            </label>
            <Input
              style={styles.input}
              id="price"
              value=""
              placeholder="Todos"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="rooms">
              Recámara(s)
            </label>
            <Input
              style={styles.input}
              id="rooms"
              value=""
              placeholder="Sin rango"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="bathrooms">
              Baño(s)
            </label>
            <Input
              style={styles.input}
              id="bathrooms"
              value=""
              placeholder="Sin rango"
            />
          </div>
          <Button type="button" style={styles.button}>
            Buscar
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default MidNavside;
