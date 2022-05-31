import client from 'src/helpers/public-axios-helper';
import { setToken, Token } from 'src/services/token.service';

export interface LoginPayload {
  username: string;
  password: string;
}

const login = async ({ username, password }: LoginPayload): Promise<Token> => {
  const request = await client.post<Token>('/api/login', {
    username,
    password,
  });
  const token: Token = {
    token: request.data.token,
    expiry: request.data.expiry,
  };
  await setToken(token);
  return token;
};

export default login;
