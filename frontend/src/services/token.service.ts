export interface Token {
  token: string;
  expiry: string;
}

const getToken = (): Token | null => {
  try {
    const token = localStorage.getItem('token');
    const expiry = localStorage.getItem('expiry');
    const result: Token = {
      token: token ?? '',
      expiry: expiry ?? '',
    };
    return result;
  } catch (e) {
    throw new Error('Ha ocurrido un error al intentar obtener tu token');
  }
};

const setToken = (token: Token): void => {
  localStorage.setItem('token', token.token);
  localStorage.setItem('expiry', token.expiry);
};

const deleteToken = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiry');
};

export { getToken, setToken, deleteToken };
