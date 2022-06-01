import { ChangeEvent, useState } from 'react';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { postState, StatePayload } from 'src/services/state.service';
import swal from 'sweetalert';
import handleStyles from './CreateState.styles';

const CreateState = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const [description, setDescription] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!description) {
      swal('Ingresa todos los campos para poder continuar');
    } else {
      try {
        const statePayload: StatePayload = {
          Description: description,
        };
        await postState(statePayload);
        swal('Has registrado un estado con éxito');
        setDescription('');
      } catch (error) {
        swal('Ha ocurrido un error', 'Contacta al administrador', 'error');
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
        <h1 style={styles.title}>Registra un estado</h1>
        <form action="POST">
          <div style={styles.inputContainer}>
            <p style={styles.label}>Descripción</p>
            <Input
              id="description"
              name="description"
              style={styles.input}
              value={description}
              placeholder="Ingresa la descripción del estado"
              onChange={handleChange}
            />
          </div>
          <Container justifyContent="center" style={styles.buttonContainer}>
            <Button onClick={handleSubmit}>Registrar estado</Button>
          </Container>
        </form>
      </Container>
    </Skeleton>
  );
};

export default CreateState;
