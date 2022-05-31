import React, { useReducer } from 'react';
import { AuthContext, initialAuthState } from 'src/contexts/auth.context';
import authReducer from 'src/reducers/auth.reducer';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
