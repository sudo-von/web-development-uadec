import { createContext, useContext } from 'react';
import { AuthContextState, AuthContextType } from './auth.context.types';

const initialAuthState: AuthContextState = {
  isLoggedIn: false,
  user: {
    username: '',
  },
};

const AuthContext = createContext<AuthContextType>({
  authState: initialAuthState,
  authDispatch: () => {},
});

const useAuth = () => useContext(AuthContext);

export { initialAuthState, AuthContext, useAuth };
