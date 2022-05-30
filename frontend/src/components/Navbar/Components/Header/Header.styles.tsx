const handleStyles = (isLarge: boolean) =>
  ({
    logoContainer: {
      paddingTop: isLarge ? 0 : 10,
      paddingBottom: isLarge ? 0 : 10,
    },
    logo: {
      marginTop: isLarge ? 13 : 0,
      marginLeft: isLarge ? 29 : 0,
    },
    multihouse: {
      marginLeft: isLarge ? 18 : 15,
      width: isLarge ? 377 : '100%',
      height: isLarge ? 23 : '100%',
      marginTop: isLarge ? 6 : 0,
    },
    bestOption: {
      width: 230,
      height: 7,
      marginTop: 2,
    },
    telephoneContainer: {
      width: isLarge ? 200 : '100%',
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
