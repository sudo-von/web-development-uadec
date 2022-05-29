const styles = {
  container: {
    width: 192,
    paddingTop: 40,
    paddingLeft: 18,
    paddingRight: 18,
  },
  title: {
    color: 'white',
    fontFamily: 'Tahoma',
    fontSize: 14,
    margin: 0,
    padding: 0,
    marginBottom: 8,
  },
  line: {
    marginBottom: 8,
  },
  p: {
    fontFamily: 'Tahoma',
    fontSize: 13,
    color: '#e9e7cd',
    display: 'block',
    margin: 0,
    padding: 0,
    marginTop: 18,
  },
  link: {
    display: 'block',
    margin: 0,
    padding: 0,
    fontSize: 11,
    fontFamily: 'Tahoma',
    color: '#ffe900',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    cursor: 'pointer',
  },
} as const;

export default styles;
