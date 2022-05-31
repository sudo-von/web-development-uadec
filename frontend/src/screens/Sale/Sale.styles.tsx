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
    paragraph: {
      textAlign: 'justify',
      fontSize: 20,
    },
    text: {
      color: '#10476b',
      marginRight: 25,
    },
  } as const);

export default handleStyles;
