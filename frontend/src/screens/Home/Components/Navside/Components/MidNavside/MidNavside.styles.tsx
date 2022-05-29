const styles = {
  container: {
    borderTop: '5px solid #183046',
    width: 231,
    paddingTop: 18,
  },
  searchContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImage: {
    marginLeft: 7,
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cityContainer: {
    marginTop: 18,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontFamily: 'Tahoma',
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 11,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    marginTop: 25,
  },
} as const;

export default styles;
