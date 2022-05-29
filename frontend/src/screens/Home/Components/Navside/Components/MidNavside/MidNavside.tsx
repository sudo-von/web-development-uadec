import Button from 'src/components/Button/Button';
import Image from 'src/components/Image/Image';
import Input from 'src/components/Input/Input';
import styles from './MidNavside.styles';

const MidNavside = () => {
  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <Image
          src="assets/buscador/img_lupa.png"
          alt="Search"
          height={41}
          width={39}
        />
        <Image
          style={styles.searchImage}
          src="assets/buscador/Encuentra.png"
          alt="Search"
          height={30}
          width={154}
        />
      </div>
      <form style={styles.formContainer}>
        <div style={styles.cityContainer}>
          <label style={styles.label} htmlFor="city">
            Ciudad y Estado, o C.P.
          </label>
          <Input id="city" value="" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="range">
            Rango de Busquéda
          </label>
          <Input id="range" value="" placeholder="Sin rango" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="price">
            Rango De Precio De: - A:
          </label>
          <Input id="price" value="" placeholder="Todos" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="rooms">
            Recámara(s)
          </label>
          <Input id="rooms" value="" placeholder="Sin rango" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="bathrooms">
            Baño(s)
          </label>
          <Input id="bathrooms" value="" placeholder="Sin rango" />
        </div>
        <Button type="button" style={styles.button}>
          Buscar
        </Button>
      </form>
    </div>
  );
};

export default MidNavside;
