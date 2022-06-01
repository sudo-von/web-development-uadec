import { ChangeEvent, useState } from 'react';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Select, { Option } from 'src/components/Select/Select';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useCity from 'src/hooks/useCity';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { CityPayload, postCity } from 'src/services/city.service';
import { postState, StatePayload } from 'src/services/state.service';
import swal from 'sweetalert';
import handleStyles from './CreateCity.styles';

const CreateCity = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const [description, setDescription] = useState('');
  const [idState, setIdState] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    }
  };

  const { states } = useCity();
  const statesOptions: Option[] = states.map(
    ({ id, Description: stateDescription }) => ({
      key: stateDescription,
      value: id,
    }),
  );

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.name === 'idState') {
      setIdState(e.target.value);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!description || !idState) {
      swal('Ingresa todos los campos para poder continuar');
    } else {
      try {
        const cityPayload: CityPayload = {
          IdState: idState,
          Description: description,
        };
        await postCity(cityPayload);
        swal('Has registrado una ciudad con éxito');
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
        <h1 style={styles.title}>Registra una ciudad</h1>
        <form action="POST">
          <div style={styles.inputContainer}>
            <p style={styles.label}>Estado al que pertenece la ciudad</p>
            <Select
              id="state"
              name="idState"
              style={styles.input}
              onChange={handleSelectChange}
              options={statesOptions}
              defaultOption="Selecciona un estado"
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Descripción de laciudad</p>
            <Input
              id="description"
              name="description"
              style={styles.input}
              value={description}
              placeholder="Ingresa la descripción de la ciudad"
              onChange={handleChange}
            />
          </div>
          <Container justifyContent="center" style={styles.buttonContainer}>
            <Button onClick={handleSubmit}>Registrar ciudad</Button>
          </Container>
        </form>
      </Container>
    </Skeleton>
  );
};

export default CreateCity;
