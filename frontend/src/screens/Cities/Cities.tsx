import Container from 'src/components/Container/Container';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from './Cities.styles';
import DataTable, { TableColumn } from 'react-data-table-component';
import useCity from 'src/hooks/useCity';
import Button from 'src/components/Button/Button';
import { City } from 'src/services/city.service';
import { useEffect } from 'react';

const Cities = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);

  const { allCities, handleAllCities, handleDeleteCity } = useCity();

  useEffect(() => {
    handleAllCities();
  }, []);

  const columns: TableColumn<City>[] = [
    {
      name: 'Descripción',
      selector: (row) => row.Description,
      sortable: true,
    },
    {
      cell: (row) => (
        <Button onClick={() => handleDeleteCity(row.id)}>Editar</Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <Button onClick={() => handleDeleteCity(row.id)}>Borrar</Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
          data={allCities}
          selectableRows
        />
      </Container>
    </Skeleton>
  );
};

export default Cities;
