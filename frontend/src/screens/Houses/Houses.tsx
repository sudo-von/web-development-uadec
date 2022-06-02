import React, { useEffect, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import Container from 'src/components/Container/Container';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { getHouses, House } from 'src/services/house.service';
import swal from 'sweetalert';
import handleStyles from './Houses.styles';

const Houses = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const [houses, setHouses] = useState<House[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await getHouses();
        setHouses(result);
      } catch (error) {
        swal('', 'Ha ocurrido un error al obtener las casas', 'error');
      }
    })();
  }, []);

  const columns: TableColumn<House>[] = [
    {
      name: 'Descripción',
      selector: (row) => row.Description,
      sortable: true,
    },
    {
      name: 'Código postal',
      selector: (row) => row.CP,
      sortable: true,
    },
    {
      name: 'Precio',
      selector: (row) => row.Price,
      sortable: true,
    },
    {
      name: 'Número de cuartos',
      selector: (row) => row.Rooms,
      sortable: true,
    },
    {
      name: 'Número de baños',
      selector: (row) => row.Baths,
      sortable: true,
    },
    {
      name: 'IdModel',
      selector: (row) => row.IdModel,
      sortable: true,
    },
    {
      name: 'IdState',
      selector: (row) => row.IdState,
      sortable: true,
    },
    {
      name: 'Vendido',
      selector: (row) => (row.is_sold ? 'Vendido' : 'Disponible'),
      sortable: true,
    },
    {
      name: 'Casa',
      selector: (row) => (row.house_image ? row.house_image.name : 's'),
    },
    {
      name: 'Localización',
      selector: (row) => row.location,
    },
  ];

  return (
    <Skeleton>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.container}
      >
        <DataTable
          title="Ciudades"
          pagination
          columns={columns}
          data={houses}
        />
      </Container>
    </Skeleton>
  );
};

export default Houses;
