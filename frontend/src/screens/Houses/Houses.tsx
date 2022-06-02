import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Container as MaterialContainer,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  deleteHouse,
  getHouseReport,
  getHouseReportByID,
  getHouses,
  getHousesWithFilters,
  House,
} from 'src/services/house.service';
import swal from 'sweetalert';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { getStateByID } from 'src/services/state.service';
import { getCityByID } from 'src/services/city.service';
import HouseNavisde from 'src/components/HouseNavside/Navside';
import Container from 'src/components/Container/Container';
import Navbar from 'src/components/Navbar/Navbar';
import handleStyles from './Houses.styles';
import Footer from 'src/components/Footer/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from 'src/contexts/auth.context';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const Houses = (): JSX.Element => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  const [houses, setHouses] = useState<House[]>([]);
  const [queryString, setQueryString] = useState(window.location.search);
  const navigate = useNavigate();

  const handleHouses = async () => {
    try {
      const result = await getHousesWithFilters(queryString);
      const data = result.map(async (house) => {
        const state = await getStateByID(house.IdState);
        const city = await getCityByID(house.IdCity);
        const h: House = {
          ...house,
          IdCity: city.Description,
          IdState: state.Description,
        };
        return h;
      });
      Promise.all(data).then((res) => setHouses(res));
    } catch (error) {
      swal('', 'Ha ocurrido un error al obtener las casas', 'error');
    }
  };

  useEffect(() => {
    (async () => {
      await handleHouses();
    })();
  }, []);

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteHouse(id);
      await handleHouses();
      swal('', 'Has eliminado la casa con éxito');
    } catch (error) {
      swal(
        'Ha ocurrido un error al borrar',
        'Contacta al administrador',
        'error',
      );
    }
  };

  return (
    <Container justifyContent="center">
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.homeContainer}
      >
        <Navbar />
        <Container
          flexDirection={isLarge ? 'row' : 'column-reverse'}
          justifyContent="center"
          alignItems={isLarge ? 'flex-start' : 'center'}
          style={styles.container}
        >
          <Grid container spacing={2} style={{ padding: 20 }}>
            {isLoggedIn && (
              <Grid
                item
                xs={12}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span
                  style={{ color: 'white', marginRight: 5, fontWeight: 'bold' }}
                >
                  Reporte general
                </span>
                <PictureAsPdfIcon
                  style={{ color: 'white' }}
                  onClick={() => getHouseReport()}
                />
              </Grid>
            )}
            {houses.map((house) => (
              <Grid item xs={12} sm={6} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`http://localhost:5000${house.house_image}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Grid container justifyContent="flex-end">
                      <Chip
                        label={house.is_sold ? 'Vendida' : 'Disponible'}
                        style={
                          house.is_sold
                            ? {
                                fontSize: 10,
                                fontWeight: 'bold',
                                background: 'red',
                                color: 'white',
                              }
                            : {
                                fontSize: 10,
                                fontWeight: 'bold',
                                background: 'green',
                                color: 'white',
                              }
                        }
                        variant="outlined"
                      />
                    </Grid>
                    <p>
                      <span style={{ fontWeight: 'bold' }}>Precio: </span>$
                      {numberWithCommas(parseFloat(house.Price))} por mes.
                    </p>
                    <p>
                      <span style={{ fontWeight: 'bold' }}>Descripción: </span>
                      La casa cuenta con {house.Rooms} cuartos y {house.Baths}{' '}
                      baños. {house.Description}
                    </p>
                    <p>
                      <span style={{ fontWeight: 'bold' }}>Ubicación: </span>
                      La casa cuenta con {house.Rooms} cuartos y {house.Baths}{' '}
                      baños.
                    </p>
                    <p>
                      <span style={{ fontWeight: 'bold' }}>Estado: </span>
                      {house.IdState}
                    </p>
                    <p>
                      <span style={{ fontWeight: 'bold' }}>Ciudad: </span>
                      {house.IdCity}
                    </p>
                    <p>
                      <span style={{ fontWeight: 'bold' }}>
                        Código postal:{' '}
                      </span>
                      {house.CP}
                    </p>
                    <MapContainer
                      center={[
                        parseFloat(house.location.split(',')[0]),
                        parseFloat(house.location.split(',')[1]),
                      ]}
                      zoom={13}
                      scrollWheelZoom={false}
                    >
                      <TileLayer
                        attribution="Ubicación de la casa"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[
                          parseFloat(house.location.split(',')[0]),
                          parseFloat(house.location.split(',')[1]),
                        ]}
                      />
                    </MapContainer>
                  </CardContent>
                  <CardActions>
                    <PictureAsPdfIcon
                      style={{ color: 'red' }}
                      onClick={() => getHouseReportByID(house.id)}
                    />
                    {isLoggedIn && (
                      <DeleteIcon
                        style={{ color: 'red' }}
                        onClick={() => handleDelete(house.id)}
                      />
                    )}
                    {isLoggedIn && (
                      <EditIcon
                        style={{ color: 'orange' }}
                        onClick={() => navigate(`/update-house/${house.id}`)}
                      />
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <HouseNavisde onClick={handleHouses} />
        </Container>
        <hr style={styles.blackLine} />
        <Footer />
      </Container>
    </Container>
  );
};

export default Houses;
