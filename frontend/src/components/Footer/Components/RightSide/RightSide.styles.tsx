const styles = {
  container: {
    height: '100%',
    width: 334,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 25,
  },
  link: {
    color: '#e97e00',
    fontFamily: 'Tahoma',
    fontSize: 12,
    padding: 0,
    margin: 0,
    textAlign: 'right',
  },
  p: {
    padding: 0,
    margin: 0,
    color: '#babab6',
    fontFamily: 'Tahoma',
    fontSize: 12,
    display: 'inline',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    cursor: 'pointer',
    textAlign: 'right',
  },
} as const;

export default styles;
