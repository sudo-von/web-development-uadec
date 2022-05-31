import { createContext, useContext } from 'react';
import { getUser } from 'src/services/localStorage.service';
import { getToken, isTokenExpired } from 'src/services/token.service';
import { AuthContextState, AuthContextType } from './auth.context.types';

const initialAuthState: AuthContextState = {
  isLoggedIn: getToken() && !isTokenExpired() ? true : false,
  user: {
    username: getUser() ?? '',
  },
};

const AuthContext = createContext<AuthContextType>({
  authState: initialAuthState,
  authDispatch: () => {},
});

const useAuth = () => useContext(AuthContext);

export { initialAuthState, AuthContext, useAuth };
