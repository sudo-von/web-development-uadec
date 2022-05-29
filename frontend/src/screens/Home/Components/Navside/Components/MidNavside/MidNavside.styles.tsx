const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      borderTop: '5px solid #183046',
      backgroundColor: '#3d6492',
      paddingTop: isLarge ? 18 : 0,
    },
    searchContainer: {
      paddingTop: isLarge ? 0 : 10,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchImage: {
      marginLeft: 7,
    },
    cityContainer: {
      width: '100%',
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: 'white',
      fontFamily: 'Tahoma',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    inputContainer: {
      width: '100%',
      marginTop: 11,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: isLarge ? 186 : '90%',
    },
    button: {
      marginTop: 25,
    },
    formContainer: {
      overflowX: 'visible',
    },
  } as const);

export default handleStyles;
