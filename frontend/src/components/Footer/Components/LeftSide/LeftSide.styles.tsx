const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      height: isLarge ? '100%' : 'auto',
      width: isLarge ? 668 : '100%',
    },
    logo: {
      marginTop: isLarge ? 0 : 15,
      marginBottom: isLarge ? 0 : 15,
      marginRight: isLarge ? 15 : 0,
    },
    ulContainer: {
      padding: 0,
      margin: 0,
      marginBottom: isLarge ? 0 : 15,
    },
    li: {
      color: '#babab6',
      fontFamily: 'Tahoma',
      fontSize: 14,
      display: isLarge ? 'inline' : 'block',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      cursor: 'pointer',
      marginBottom: isLarge ? 0 : 10,
      textAlign: 'center',
    },
    link: {
      textDecoration: 'none',
    },
    dot: {
      color: '#e97e00',
      marginRight: isLarge ? 12 : 0,
      marginLeft: isLarge ? 12 : 0,
    },
  } as const);

export default handleStyles;
