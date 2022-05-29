const handleStyles = (isLarge: boolean) =>
  ({
    homeContainer: {
      width: isLarge ? 1002 : '100%',
    },
    container: {
      width: isLarge ? 1002 : '80%',
      height: 925,
    },
    contentContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    blackLine: {
      display: 'block',
    },
  } as const);

export default handleStyles;
