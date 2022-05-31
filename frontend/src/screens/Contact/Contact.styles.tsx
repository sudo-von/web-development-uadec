const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      padding: 20,
    },
    title: {
      fontWeight: 'bold',
      color: '#10476b',
      textAlign: 'center',
    },
    label: {
      color: '#10476b',
      fontFamily: 'Tahoma',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    inputContainer: {
      marginTop: 11,
    },
    input: {
      borderRadius: 5,
      height: 30,
      width: isLarge ? 600 : 350,
      paddingLeft: 10,
      fontSize: 14,
    },
    button: {
      marginTop: 25,
    },
    formContainer: {
      width: '100%',
      background: 'green',
    },
    buttonContainer: {
      marginTop: 23,
    },
  } as const);

export default handleStyles;
