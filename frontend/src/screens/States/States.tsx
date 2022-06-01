import Container from 'src/components/Container/Container';
import Skeleton from 'src/components/Skeleton/Skeleton';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { State } from 'src/services/state.service';
import handleStyles from './States.styles';
import DataTable, { TableColumn } from 'react-data-table-component';
import useCity from 'src/hooks/useCity';
import Button from 'src/components/Button/Button';

const States = (): JSX.Element => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);

  const { states, handleDeleteState } = useCity();
  const columns: TableColumn<State>[] = [
    {
      name: 'Descripción',
      selector: (row) => row.Description,
      sortable: true,
    },
    {
      cell: (row) => (
        <Button onClick={() => handleDeleteState(row.id)}>Editar</Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <Button onClick={() => handleDeleteState(row.id)}>Borrar</Button>
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
          title="Estados"
          pagination
          columns={columns}
          data={states}
          selectableRows
        />
      </Container>
    </Skeleton>
  );
};

export default States;
