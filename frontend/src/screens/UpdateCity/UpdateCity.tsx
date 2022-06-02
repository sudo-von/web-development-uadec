import { ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useCity from 'src/hooks/useCity';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { City, updateCity, UpdateCityPayload } from 'src/services/city.service';
import swal from 'sweetalert';
import handleStyles from './UpdateCity.styles';

const CreateCity = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const { id } = useParams();
  const { city, setCity, state, handleCityById } = useCity();

  useEffect(() => {
    if (id) {
      handleCityById(id);
    } else {
      console.log('sin id');
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'description') {
      if (city) {
        const result: City = { ...city, Description: e.target.value };
        setCity(result);
      }
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (!city || !city.Description) {
      swal('Ingresa todos los campos para poder continuar');
    } else {
      try {
        const cityPayload: UpdateCityPayload = {
          id: city.id,
          IdState: state?.id ?? '',
          Description: city.Description,
        };
        await updateCity(cityPayload);
        swal('Has actualizado la ciudad con éxito');
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
            <Input
              disabled={true}
              id="state"
              name="idState"
              style={styles.input}
              value={state?.Description}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Descripción de la ciudad</p>
            <Input
              id="description"
              name="description"
              style={styles.input}
              value={city?.Description}
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
