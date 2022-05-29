const styles = (isLarge: boolean) =>
  ({
    contentContainer: {
      width: isLarge ? 771 : '100%',
      height: isLarge ? 925 : '100%',
      backgroundColor: 'white',
    },
    house: {
      objectFit: 'fill',
      width: isLarge ? 771 : '100%',
      height: isLarge ? 255 : '100%',
      display: 'block',
    },
    welcome: {
      marginTop: 22,
      display: 'block',
    },
    smallHouses: {
      marginRight: 14,
      marginBottom: isLarge ? 0 : 20,
    },
    smallHousesContainer: {
      marginTop: isLarge ? 0 : 20,
      paddingRight: 21,
      marginLeft: 26,
    },
    services: {
      marginTop: 40,
      marginBottom: 29,
    },
    paragraphContainer: {
      marginTop: 29,
    },
    paragraph: {
      fontFamily: 'Tahoma',
      fontSize: 14,
      letterSpacing: '.6px',
      lineHeight: 1.4,
      display: 'inline',
    },
  } as const);

export default styles;
