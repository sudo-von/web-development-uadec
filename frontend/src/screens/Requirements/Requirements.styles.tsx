const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      padding: 20,
    },
    title: {
      fontWeight: 'bold',
      color: '#10476b',
    },
  } as const);

export default handleStyles;
