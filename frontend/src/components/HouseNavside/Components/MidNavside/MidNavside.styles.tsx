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
    select: {
      marginTop: 2,
      width: isLarge ? 192 : 330,
      height: 21,
    },
    crossSelect: {
      marginTop: 2,
      width: isLarge ? 86 : 330,
      height: 21,
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
    crossInputContainer: {
      width: '100%',
      marginTop: 11,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginTop: 2,
      width: isLarge ? 186 : 320,
    },
    button: {
      marginTop: 25,
    },
    formContainer: {
      overflowX: 'visible',
    },
  } as const);

export default handleStyles;
