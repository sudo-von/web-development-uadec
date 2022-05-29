const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      background: '#3d6492',
      width: isLarge ? '100%' : '80%',
      height: isLarge ? 75 : '100%',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: isLarge ? 'row' : 'column',
      justifyContent: 'flex-start',
    },
  } as const);

export default handleStyles;
