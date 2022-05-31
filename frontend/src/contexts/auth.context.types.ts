import { AuthAction } from 'src/reducers/auth.actions';

export interface User {
  username: string;
}

export interface AuthContextState {
  isLoggedIn: boolean;
  user: User;
}

export interface AuthContextType {
  authState: AuthContextState;
  authDispatch: React.Dispatch<AuthAction>;
}
