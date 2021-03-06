import { useState, useEffect } from 'react';
import {
  getCities,
  City,
  deleteCity,
  getAllCities,
  getCityByID,
} from 'src/services/city.service';
import {
  deleteState,
  getStateByID,
  getStates,
  State,
} from 'src/services/state.service';
import swal from 'sweetalert';

const useCity = () => {
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [allCities, setAllCities] = useState<City[]>([]);
  const [city, setCity] = useState<City>();
  const [state, setState] = useState<State>();

  useEffect(() => {
    handleStates();
  }, []);

  const handleDeleteCity = async (cityId: string) => {
    try {
      await deleteCity(cityId);
      await handleAllCities();
      swal('', '¡Has eliminado la ciudad con éxito!');
    } catch (error) {
      swal('', 'Ha ocurrido un error al eliminar la ciudad', 'error');
    }
  };

  const handleDeleteState = async (stateId: string) => {
    try {
      await deleteState(stateId);
      await handleStates();
      swal('', '¡Has eliminado el estado con éxito!');
    } catch (error) {
      swal('', 'Ha ocurrido un error al eliminar el estado', 'error');
    }
  };

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

  const handleCityById = async (cityId: string) => {
    try {
      const cityResult = await getCityByID(cityId);
      const stateResult = await getStateByID(cityResult.IdState);
      setCity(cityResult);
      setState(stateResult);
    } catch (error) {
      swal('', 'Ha ocurrido un error al cargar la  ciudad', 'error');
    }
  };

  const handleStateById = async (stateId: string) => {
    try {
      const result = await getStateByID(stateId);
      setState(result);
    } catch (error) {
      swal('', 'Ha ocurrido un error al cargar el estado', 'error');
    }
  };

  const handleAllCities = async () => {
    try {
      const citiesResult = await getAllCities();
      setAllCities(citiesResult);
    } catch (error) {
      swal('', 'Ha ocurrido un error al cargar las ciudades', 'error');
    }
  };

  return {
    states,
    cities,
    allCities,
    handleCities,
    handleDeleteState,
    handleDeleteCity,
    handleAllCities,
    city,
    setCity,
    state,
    setState,
    handleCityById,
    handleStateById,
  };
};

export default useCity;
