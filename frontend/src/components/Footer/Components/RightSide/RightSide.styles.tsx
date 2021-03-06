const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      height: '100%',
      width: isLarge ? 330 : '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isLarge ? 'flex-end' : 'center',
      justifyContent: 'center',
      marginRight: isLarge ? 25 : 0,
      marginBottom: isLarge ? 0 : 15,
    },
    policies: {
      color: '#e97e00',
      fontFamily: 'Tahoma',
      fontSize: 12,
      padding: 0,
      margin: 0,
      textAlign: isLarge ? 'right' : 'center',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      cursor: 'pointer',
    },
    p: {
      padding: 0,
      margin: 0,
      color: '#babab6',
      fontFamily: 'Tahoma',
      fontSize: 12,
      display: 'inline',
      textAlign: 'right',
    },
    link: {
      textDecoration: 'none',
    },
  } as const);

export default handleStyles;
