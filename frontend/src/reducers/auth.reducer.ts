import { initialAuthState } from 'src/contexts/auth.context';
import { AuthContextState } from 'src/contexts/auth.context.types';
import { AuthAction, AuthActionKind } from './auth.actions';

const authReducer = (
  state: AuthContextState,
  action: AuthAction,
): AuthContextState => {
  switch (action.type) {
    case AuthActionKind.LOGIN: {
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    }
    case AuthActionKind.LOGOUT: {
      return initialAuthState;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
