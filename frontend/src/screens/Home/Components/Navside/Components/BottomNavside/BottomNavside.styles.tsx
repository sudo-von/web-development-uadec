const styles = {
  container: {
    borderTop: '5px solid #183046',
    backgroundColor: '#3d6492',
    width: 231,
    height: 702,
    paddingTop: 26,
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
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontFamily: 'Tahoma',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    marginTop: 11,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    marginTop: 27,
  },
} as const;

export default styles;
