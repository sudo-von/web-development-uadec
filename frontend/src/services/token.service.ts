import moment from 'moment-timezone';

export interface Token {
  token: string;
  expiry: string;
}

const getToken = (): Token | null => {
  const token = localStorage.getItem('token');
  const expiry = localStorage.getItem('expiry');
  if (!token && !expiry) {
    return null;
  }
  const result: Token = {
    token: token ?? '',
    expiry: expiry ?? '',
  };
  return result;
};

const setToken = (token: Token): void => {
  localStorage.setItem('token', token.token);
  localStorage.setItem('expiry', token.expiry);
};

const deleteToken = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiry');
};

const isTokenExpired = (): boolean => {
  const token = getToken();
  if (!token) {
    return true;
  }
  const expiry = token.expiry;
  const expiryDate = moment(expiry, 'YYYY-MM-DDTHH:mm').utc();
  const currentDate = moment();
  return expiryDate.isBefore(currentDate);
};

export { getToken, setToken, deleteToken, isTokenExpired };
