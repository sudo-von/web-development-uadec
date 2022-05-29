const handleStyles = (isLarge: boolean) =>
  ({
    container: {
      width: isLarge ? 231 : '100%',
      height: isLarge ? 925 : '100%',
    },
  } as const);

export default handleStyles;
