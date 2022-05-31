import { User } from 'src/contexts/auth.context.types';

export enum AuthActionKind {
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export interface AuthAction {
  type: AuthActionKind;
  payload: User;
}
