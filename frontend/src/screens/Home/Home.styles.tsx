const handleStyles = (isLarge: boolean) =>
  ({
    homeContainer: {
      width: isLarge ? 1002 : '100%',
    },
    container: {
      width: isLarge ? 1002 : '80%',
      height: isLarge ? 925 : '100%',
    },
    contentContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    blackLine: {
      margin: 0,
      padding: 0,
      borderTop: '1px solid black',
      borderBottom: '2px solid black',
      width: isLarge ? '100%' : '80%',
    },
  } as const);

export default handleStyles;
