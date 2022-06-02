import { ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useCity from 'src/hooks/useCity';
import useMediaQuery from 'src/hooks/useMediaQuery';
import {
  State,
  updateState,
  UpdateStatePayload,
} from 'src/services/state.service';
import swal from 'sweetalert';
import handleStyles from './UpdateState.styles';

const UpdateState = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const { id } = useParams();
  const { setState, state, handleStateById } = useCity();

  useEffect(() => {
    if (id) {
      handleStateById(id);
    } else {
      console.log('sin id');
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'description') {
      if (state) {
        const result: State = { ...state, Description: e.target.value };
        setState(result);
      }
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!state || !state.Description) {
      swal('Ingresa todos los campos para poder continuar');
    } else {
      try {
        const statePayload: UpdateStatePayload = {
          id: state.id,
          Description: state.Description,
        };
        await updateState(statePayload);
        swal('Has actualizado el estado con éxito');
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
        <h1 style={styles.title}>Actualiza un estado</h1>
        <form action="POST">
          <div style={styles.inputContainer}>
            <p style={styles.label}>Estado</p>
            <Input
              id="description"
              name="description"
              style={styles.input}
              value={state?.Description}
              placeholder="Ingresa el estado"
              onChange={handleChange}
            />
          </div>
          <Container justifyContent="center" style={styles.buttonContainer}>
            <Button onClick={handleSubmit}>Actualizar estado</Button>
          </Container>
        </form>
      </Container>
    </Skeleton>
  );
};

export default UpdateState;
