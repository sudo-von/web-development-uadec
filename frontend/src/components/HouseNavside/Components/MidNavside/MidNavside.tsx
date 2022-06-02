import { ChangeEvent, useState } from 'react';
import Button from 'src/components/Button/Button';
import Container from 'src/components/Container/Container';
import Image from 'src/components/Image/Image';
import Input from 'src/components/Input/Input';
import Select, { Option } from 'src/components/Select/Select';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './MidNavside.styles';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { deleteHouse } from 'src/services/house.service';

export interface Filters {
  baths: string;
  rooms: string;
  pinicial: string;
  pfinal: string;
  vendida: boolean;
  cpcs: string;
}

const MidNavside = ({ onClick }: { onClick: () => Promise<void> }) => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const [filters, setFilters] = useState<Filters>({
    baths: '',
    rooms: '',
    pinicial: '',
    pfinal: '',
    vendida: false,
    cpcs: '',
  });
  const navigate = useNavigate();

  const range: Option[] = [
    {
      key: 'Sin rango',
      value: '',
    },
  ];

  const baths: Option[] = [
    {
      key: 'No importa',
      value: '',
    },
    {
      key: 'Un baño',
      value: '1',
    },
    {
      key: 'Dos baños',
      value: '2',
    },
    {
      key: 'Tres baños',
      value: '3',
    },
  ];

  const rooms: Option[] = [
    {
      key: 'No importa',
      value: '',
    },
    {
      key: 'Un cuarto',
      value: '1',
    },
    {
      key: 'Dos cuartos',
      value: '2',
    },
    {
      key: 'Tres cuartos',
      value: '3',
    },
  ];

  const pinicial: Option[] = [
    {
      key: 'Todos',
      value: '',
    },
    {
      key: 'Cien',
      value: '100',
    },
    {
      key: 'Mil',
      value: '1000',
    },
    {
      key: 'Dos mil',
      value: '2000',
    },
  ];

  const pfinal: Option[] = [
    {
      key: 'Todos',
      value: '',
    },
    {
      key: 'Cinco mil',
      value: '5000',
    },
    {
      key: 'Diez mil',
      value: '10000',
    },
    {
      key: 'Cien mil',
      value: '100000',
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let f: Filters = {
      baths: '',
      rooms: '',
      pinicial: '',
      pfinal: '',
      vendida: false,
      cpcs: '',
    };
    if (filters) {
      if (e.target.name === 'cpcs') {
        f = { ...filters, cpcs: e.target.value };
        setFilters(f);
      }
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    let f: Filters = {
      baths: '',
      rooms: '',
      pinicial: '',
      pfinal: '',
      vendida: false,
      cpcs: '',
    };
    if (filters) {
      if (e.target.name === 'baths') {
        f = { ...filters, baths: e.target.value };
        setFilters(f);
      } else if (e.target.name === 'rooms') {
        f = { ...filters, rooms: e.target.value };
        setFilters(f);
      } else if (e.target.name === 'baths') {
        f = { ...filters, baths: e.target.value };
        setFilters(f);
      } else if (e.target.name === 'pinicial') {
        f = { ...filters, pinicial: e.target.value };
        setFilters(f);
      } else if (e.target.name === 'pfinal') {
        f = { ...filters, pfinal: e.target.value };
        setFilters(f);
      } else if (e.target.name === 'vendida') {
        f = { ...filters, vendida: e.target.value === 'true' };
        setFilters(f);
      }
    }
  };

  const handleSubmit = async (): Promise<void> => {
    console.log(1);
    try {
      if (filters) {
        let str = Object.entries(filters)
          .map(([key, val]) => `${key}=${val}`)
          .join('&');
        window.location.search = str;
        await onClick();
      }
    } catch (error) {
      swal('Ha ocurrido un error', 'Contacta al administrador', 'error');
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <Image
          src="/assets/buscador/img_lupa.png"
          alt="Search"
          height={41}
          width={39}
        />
        <Image
          style={styles.searchImage}
          src="/assets/buscador/Encuentra.png"
          alt="Search"
          height={30}
          width={154}
        />
      </div>
      <form>
        <Container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={styles.formContainer}
        >
          <div style={styles.cityContainer}>
            <label style={styles.label} htmlFor="cpcs">
              Ciudad y Estado, o C.P.
            </label>
            <Input
              style={styles.input}
              id="cpcs"
              name="cpcs"
              value={filters?.cpcs}
              onChange={handleChange}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="range">
              Rango de Busquéda
            </label>
            <Select
              onChange={handleSelectChange}
              style={styles.select}
              id="range"
              name="range"
              options={range}
            />
          </div>
          <div style={styles.crossInputContainer}>
            <label style={styles.label} htmlFor="price">
              Rango De Precio De: - A:
            </label>
            <div
              style={{
                display: 'flex',
                flexDirection: isLarge ? 'row' : 'column',
                width: isLarge ? '84%' : '100%',
                justifyContent: isLarge ? 'space-between' : 'center',
                alignItems: 'center',
              }}
            >
              <Select
                onChange={handleSelectChange}
                style={styles.crossSelect}
                id="pinicial"
                name="pinicial"
                options={pinicial}
              />
              <Select
                onChange={handleSelectChange}
                style={styles.crossSelect}
                id="pfinal"
                name="pfinal"
                options={pfinal}
              />
            </div>
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="rooms">
              Recámara(s)
            </label>
            <Select
              onChange={handleSelectChange}
              style={styles.select}
              id="rooms"
              name="rooms"
              options={rooms}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="baths">
              Baño(s)
            </label>
            <Select
              onChange={handleSelectChange}
              style={styles.select}
              id="baths"
              name="baths"
              options={baths}
            />
          </div>
          <Button onClick={handleSubmit} type="button" style={styles.button}>
            Buscar
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default MidNavside;
