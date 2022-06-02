import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
} from '@mui/material';
import { useEffect, useState } from 'react';
import Skeleton from 'src/components/Skeleton/Skeleton';
import { getHouses, House } from 'src/services/house.service';
import swal from 'sweetalert';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Houses = (): JSX.Element => {
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

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Skeleton>
      <Grid container spacing={2} style={{ padding: 20 }}>
        {houses.map((house) => (
          <Grid item xs={12} sm={6} md={4}>
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
                  <span style={{ fontWeight: 'bold' }}>Código postal: </span>
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
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Skeleton>
  );
};

export default Houses;
