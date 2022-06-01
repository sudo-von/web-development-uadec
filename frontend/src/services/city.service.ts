import client from 'src/helpers/private-axios-helper';

export interface City {
  id: string;
  idState: string;
  Description: string;
}

export interface CityPayload {
  IdState: string;
  Description: string;
}

const getCities = async (stateId: string): Promise<City[]> => {
  const request = await client.get<City[]>(`/api/city-state/${stateId}`);
  return request.data;
};

const getAllCities = async (): Promise<City[]> => {
  const request = await client.get<City[]>(`/api/city-list/`);
  return request.data;
};

const postCity = async (cityPayload: CityPayload): Promise<void> => {
  await client.post<CityPayload[]>('/api/city-create/', cityPayload);
};

const deleteCity = async (cityId: string): Promise<void> => {
  await client.delete(`/api/city-delete/${cityId}/`);
};

export { getCities, getAllCities, postCity, deleteCity };
