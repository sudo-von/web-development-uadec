const styles = (isLarge: boolean) =>
  ({
    container: {
      paddingTop: isLarge ? 19 : 0,
      paddingBottom: isLarge ? 17 : 0,
      backgroundColor: '#3c84ab',
    },
    transparentButton: {
      fontSize: isLarge ? 14 : 10,
      marginBottom: isLarge ? 3 : 0,
      height: isLarge ? 23 : '100%',
      paddingTop: isLarge ? 0 : 10,
      paddingBottom: isLarge ? 0 : 10,
      paddingRight: isLarge ? 45 : 0,
      justifyContent: isLarge ? 'flex-end' : 'center',
    },
    link: {
      textDecoration: 'none',
    },
  } as const);

export default styles;
