const styles = (isLarge: boolean) =>
  ({
    container: {
      marginTop: isLarge ? 52 : 0,
      borderBottom: '5px solid #183046',
    },
    leftMenu: {
      width: isLarge ? '70%' : '100%',
    },
    button: {
      fontSize: 12,
    },
    rightMenu: {
      marginTop: isLarge ? 0 : 5,
      width: isLarge ? '30%' : '100%',
      height: 36,
    },
    link: {
      textDecoration: 'none',
    },
  } as const);

export default styles;
