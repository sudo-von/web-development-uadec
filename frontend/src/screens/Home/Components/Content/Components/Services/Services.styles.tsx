const styles = (isLarge: boolean) =>
  ({
    services: {
      marginTop: 40,
      marginBottom: 29,
    },
    servicesContainer: {
      marginTop: 25,
      marginLeft: isLarge ? 57 : 26,
      marginRight: isLarge ? 37 : 26,
    },
    paragraph: {
      fontFamily: 'Tahoma',
      fontSize: 14,
      letterSpacing: '.6px',
      lineHeight: 1.4,
      display: 'inline',
    },
    paragraphContainer: {
      marginTop: 29,
    },
  } as const);

export default styles;
