const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      paddingTop: 20,
      paddingLeft: isLarge ? 18 : 0,
      paddingRight: isLarge ? 18 : 0,
      backgroundColor: '#3d6492',
    },
    title: {
      color: 'white',
      fontFamily: 'Tahoma',
      fontSize: isLarge ? 14 : 16,
      margin: 0,
      padding: 0,
      marginBottom: 8,
    },
    line: {
      marginBottom: isLarge ? 8 : 2,
    },
    p: {
      fontFamily: 'Tahoma',
      fontSize: 13,
      color: '#e9e7cd',
      display: 'block',
      margin: 0,
      padding: 0,
      marginTop: 18,
    },
    link: {
      display: 'block',
      margin: 0,
      padding: 0,
      fontSize: 11,
      fontFamily: 'Tahoma',
      color: '#ffe900',
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      cursor: 'pointer',
    },
    pContainer: {
      width: isLarge ? '100%' : '90%',
    },
    statsContainer: {
      marginTop: isLarge ? 28 : 10,
      marginBottom: isLarge ? 0 : 15,
    },
    stats: {
      fontFamily: 'Helvetica',
      fontSize: 11,
      color: 'white',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    views: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #c5e4ee',
      color: '#303030',
      letterSpacing: 2,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  } as const);

export default handleStyles;
