const styles = {
  container: {
    height: '100%',
    width: 668,
    display: 'flex',
    justifyContent: 'center ',
    alignItems: 'center',
  },
  ulContainer: {
    maxHeight: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  link: {
    color: '#babab6',
    fontFamily: 'Tahoma',
    fontSize: 14,
    display: 'inline',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    cursor: 'pointer',
  },
  dot: {
    color: '#e97e00',
    marginRight: 12,
    marginLeft: 12,
  },
} as const;

export default styles;
