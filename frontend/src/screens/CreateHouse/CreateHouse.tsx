import { ChangeEvent, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Input from 'src/components/Input/Input';
import Select, { Option } from 'src/components/Select/Select';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useCity from 'src/hooks/useCity';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { postHouse, HousePayload } from 'src/services/house.service';
import swal from 'sweetalert';
import handleStyles from './CreateHouse.styles';

interface DraggerProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Dragger = ({ setLocation }: DraggerProps) => {
  useMapEvents({
    dragend: (e) => {
      const coord = e.target.getCenter();
      setLocation(`${coord.lat},${coord.lng}`);
    },
  });
  return null;
};

const CreateHouse = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const [description, setDescription] = useState('');
  const [cp, setCP] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [baths, setBaths] = useState('');
  const [houseImage, setHouseImage] = useState<File>();
  const [location, setLocation] = useState('');
  const [idState, setIdState] = useState('');
  const [idCity, setIdCity] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const clearState = () => {
    setDescription('');
    setCP('');
    setPrice('');
    setRooms('');
    setBaths('');
    setHouseImage(undefined);
    setLocation('');
    if (ref.current) {
      ref.current.value = '';
      ref.current.files = null;
    }
  };

  const { states, cities, handleCities } = useCity();
  const statesOptions: Option[] = states.map(
    ({ id, Description: stateDescription }) => ({
      key: stateDescription,
      value: id,
    }),
  );
  const citiesOptions: Option[] = cities.map(
    ({ id, Description: cityDescription }) => ({
      key: cityDescription,
      value: id,
    }),
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else if (e.target.name === 'cp') {
      setCP(e.target.value);
    } else if (e.target.name === 'price') {
      setPrice(e.target.value);
    } else if (e.target.name === 'rooms') {
      setRooms(e.target.value);
    } else if (e.target.name === 'baths') {
      setBaths(e.target.value);
    } else if (e.target.name === 'houseImage') {
      setHouseImage(e.target.files?.[0]);
    } else if (e.target.name === 'location') {
      setLocation(e.target.value);
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.name === 'idCity') {
      setIdCity(e.target.value);
    } else if (e.target.name === 'idState') {
      setIdState(e.target.value);
      handleCities(e.target.value);
    }
  };

  const handleSubmit = async (): Promise<void> => {
    if (
      !description ||
      !cp ||
      !price ||
      !rooms ||
      !baths ||
      !houseImage ||
      !location ||
      !idState ||
      !idCity
    ) {
      swal('Ingresa todos los campos para poder continuar');
    } else {
      try {
        const housePayload: HousePayload = {
          Description: description,
          CP: cp,
          Price: price,
          Rooms: rooms,
          Baths: baths,
          IdCity: idCity,
          IdModel: '1',
          IdState: idState,
          house_image: houseImage ?? null,
          location: location,
        };
        await postHouse(housePayload);
        swal('Has registrado la casa con éxito');
        clearState();
      } catch (error) {
        swal(
          'Ha ocurrido un error',
          'Comprueba que los campos estén correctamente',
          'error',
        );
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
        <h1 style={styles.title}>Registra una casa</h1>
        <form action="POST">
          <div style={styles.inputContainer}>
            <p style={styles.label}>Descripción</p>
            <Input
              id="description"
              name="description"
              style={styles.input}
              value={description}
              placeholder="Ingresa la descripción de la casa"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Código postal</p>
            <Input
              id="cp"
              name="cp"
              style={styles.input}
              type="number"
              value={cp}
              placeholder="Ingresa tu código postal"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Precio (MXN)</p>
            <Input
              id="price"
              name="price"
              style={styles.input}
              type="number"
              value={price}
              placeholder="Ingresa el precio (MXN)"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Número de cuartos</p>
            <Input
              id="rooms"
              name="rooms"
              style={styles.input}
              type="number"
              value={rooms}
              placeholder="Ingresa el número de cuartos"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Número de baños</p>
            <Input
              id="baths"
              name="baths"
              style={styles.input}
              type="number"
              value={baths}
              placeholder="Ingresa el número de baños"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Estado</p>
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
            <p style={styles.label}>Ciudad</p>
            <Select
              id="city"
              name="idCity"
              style={styles.input}
              onChange={handleSelectChange}
              options={citiesOptions}
              defaultOption="Selecciona una ciudad"
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Imagen de la casa</p>
            <Input
              inputRef={ref}
              id="houseImage"
              name="houseImage"
              style={styles.input}
              type="file"
              placeholder="Selecciona la imagen de tu casa"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <p style={styles.label}>Selecciona las coordenadas del mapa</p>
            <Input
              id="location"
              name="location"
              style={styles.input}
              type="text"
              value={location}
              placeholder="Haz click en el mapa"
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <MapContainer
            center={[25.4267, -100.99]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 350 }}
          >
            <TileLayer
              attribution="Ubicación de la casa"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[25.4267, -100.99]} />
            <Dragger setLocation={setLocation} />
          </MapContainer>
          <Container justifyContent="center" style={styles.buttonContainer}>
            <Button onClick={handleSubmit}>Registrar casa</Button>
          </Container>
        </form>
      </Container>
    </Skeleton>
  );
};

export default CreateHouse;
