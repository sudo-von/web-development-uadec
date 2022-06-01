import { useState, useEffect } from 'react';
import { getCities, City } from 'src/services/city.service';
import { getStates, State } from 'src/services/state.service';
import swal from 'sweetalert';

const useCity = () => {
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    handleStates();
  }, []);

  const handleStates = async () => {
    try {
      const statesResult = await getStates();
      setStates(statesResult);
    } catch (error) {
      swal('', 'Ha ocurrido un error al cargar los estados', 'error');
    }
  };

  const handleCities = async (stateId: string) => {
    try {
      const citiesResult = await getCities(stateId);
      setCities(citiesResult);
    } catch (error) {
      swal('', 'Ha ocurrido un error al cargar las ciudades', 'error');
    }
  };

  return { states, cities, handleCities };
};

export default useCity;
