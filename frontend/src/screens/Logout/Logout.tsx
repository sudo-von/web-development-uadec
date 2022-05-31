/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Container from 'src/components/Container/Container';
import { useAuth } from 'src/contexts/auth.context';
import { User } from 'src/contexts/auth.context.types';
import { AuthActionKind } from 'src/reducers/auth.actions';
import HashLoader from 'react-spinners/HashLoader';
import { deleteToken } from 'src/services/token.service';
import { deleteUser } from 'src/services/localStorage.service';
import styles from './Logout.styles';

const Logout = (): JSX.Element => {
  const { authDispatch } = useAuth();
  useEffect(() => {
    setTimeout(function () {
      const user: User = {
        username: '',
      };
      deleteToken();
      deleteUser();
      authDispatch({ type: AuthActionKind.LOGOUT, payload: user });
    }, 5000);
  }, []);
  return (
    <Container
      style={styles.container}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <HashLoader
        color="white"
        loading={true}
        css="display: block; margin: 0 auto; border-color: white;"
        size={150}
      />
      <h2 style={styles.title}>Cerrando sesión</h2>
    </Container>
  );
};

export default Logout;
