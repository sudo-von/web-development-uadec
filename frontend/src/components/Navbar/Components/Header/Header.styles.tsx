const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginTop: 13,
    marginLeft: 29,
  },
  multihouse: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 18,
    width: 377,
    height: 23,
    marginTop: 6,
  },
  bestOption: {
    width: 230,
    height: 7,
    marginTop: 2,
  },
  telephoneContainer: {
    width: 200,
    height: 43,
    backgroundImage: `url(assets/header/bloque_call_now/cuadro_blanco.png)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginRight: 9,
  },
} as const;

export default styles;
