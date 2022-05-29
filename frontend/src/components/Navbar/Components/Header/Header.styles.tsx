const handleStyles = (isLarge: boolean) =>
  ({
    logo: {
      marginTop: 13,
      marginLeft: 29,
    },
    multihouse: {
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
      width: isLarge ? 200 : '74%',
      height: 43,
      backgroundImage: `url(assets/header/bloque_call_now/cuadro_blanco.png)`,
      marginTop: isLarge ? 15 : 5,
      marginBottom: isLarge ? 0 : 5,
      marginRight: isLarge ? 9 : 0,
    },
    telephone: {
      width: 20,
      height: 24,
      marginRight: isLarge ? 0 : 10,
    },
  } as const);

export default handleStyles;
