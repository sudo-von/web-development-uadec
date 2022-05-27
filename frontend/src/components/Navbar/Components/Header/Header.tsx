import styles from './Header.styles';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.leftHeader}>
        <img
          src="assets/header/logotipo.png"
          alt="header"
          style={styles.logo}
        />
        <div style={styles.multihouse}>
          <img src="assets/header/Bienes Raices mULTIcASA.png" alt="header" />
          <img
            style={styles.bestOption}
            src="assets/header/Tu mejor opcion en agencia de bienes raices.png"
            alt="header"
          />
        </div>
      </div>
      <div style={styles.telephoneContainer}>
        <img src="assets/header/bloque_call_now/telefono.png" alt="asas" />
        <img
          src="assets/header/bloque_call_now/LLama al_ 1-800-123-4567.png"
          alt="asas"
        />
      </div>
    </div>
  );
};

export default Header;
