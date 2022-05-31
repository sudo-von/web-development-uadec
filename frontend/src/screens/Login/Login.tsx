import { useState, ChangeEvent } from 'react';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import login from 'src/services/auth.service';
import handleStyles from './Login.styles';
import swal from 'sweetalert';
import { useAuth } from 'src/contexts/auth.context';
import { AuthActionKind } from 'src/reducers/auth.actions';
import { User } from 'src/contexts/auth.context.types';

const Login = () => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const { authDispatch } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!username || !password) {
      swal('Ingresa tu usuario y contraseña para poder continuar');
    } else {
      try {
        await login({ username, password });
        const user: User = {
          username,
        };
        authDispatch({ type: AuthActionKind.LOGIN, payload: user });
      } catch (error) {
        swal((error as Error).message, 'Comprueba tus credenciales', 'error');
      }
    }
  };

  return (
    <Skeleton>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <h1 style={styles.title}>Inicia sesión</h1>
        <form action="POST">
          <div style={styles.inputContainer}>
            <p style={styles.label}>Usuario</p>
            <Input
              name="username"
              style={styles.input}
              id="range"
              value={username}
              placeholder="Ingresa tu usuario"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Contraseña</p>
            <Input
              name="password"
              type="password"
              style={styles.input}
              id="range"
              value={password}
              placeholder="Ingresa tu contraseña"
              onChange={handleChange}
            />
          </div>
          <Container justifyContent="center" style={styles.buttonContainer}>
            <Button onClick={handleSubmit}>Enviar sugerencia</Button>
          </Container>
        </form>
      </Container>
    </Skeleton>
  );
};

export default Login;
