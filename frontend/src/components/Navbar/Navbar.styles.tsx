const handleStyles = (isLarge: boolean) => ({
  navbar: {
    backgroundColor: '#10476b',
    width: isLarge ? 1002 : '80%',
    height: isLarge ? 151 : '100%',
  } as const,
});

export default handleStyles;
