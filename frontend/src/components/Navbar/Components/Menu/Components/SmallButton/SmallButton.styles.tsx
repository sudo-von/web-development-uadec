const styles = (marginRight: number, marginLeft: number) =>
  ({
    container: {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Tahoma',
      color: 'white',
      fontSize: 13,
      fontWeight: 'bold',
    },
    image: {
      marginRight: marginLeft,
    },
    span: {
      marginRight,
    },
  } as const);

export default styles;
