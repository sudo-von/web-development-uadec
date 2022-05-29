const styles = (isLarge: boolean) =>
  ({
    contentContainer: {
      width: isLarge ? 771 : '100%',
      height: 925,
      backgroundColor: 'white',
    },
    house: {
      display: 'block',
    },
    welcome: {
      marginTop: 22,
      display: 'block',
    },
    smallHouses: {
      marginRight: 14,
    },
    smallHousesContainer: {
      paddingRight: 21,
      marginLeft: 26,
    },
    services: {
      marginTop: 40,
      marginBottom: 29,
    },
    servicesContainer: {
      marginTop: 25,
      marginLeft: 57,
      marginRight: 37,
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
