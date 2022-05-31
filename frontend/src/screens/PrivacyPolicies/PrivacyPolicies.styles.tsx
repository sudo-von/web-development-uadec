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
      fontSize: 15,
    },
  } as const);

export default handleStyles;
