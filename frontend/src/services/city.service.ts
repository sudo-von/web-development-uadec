import client from 'src/helpers/private-axios-helper';
import { getStateByID, State } from './state.service';

export interface City {
  id: string;
  IdState: string;
  Description: string;
}

export interface CityPayload {
  IdState: string;
  Description: string;
}

export interface UpdateCityPayload {
  id: string;
  IdState: string;
  Description: string;
}

export interface CityDetail {
  id: string;
  idState: string;
  Description: string;
  StateDescription: string;
}

const getCities = async (stateId: string): Promise<City[]> => {
  const request = await client.get<City[]>(`/api/city-state/${stateId}/`);
  return request.data;
};

const getAllCities = async (): Promise<City[]> => {
  const request = await client.get<City[]>(`/api/city-list`);
  return request.data;
};

const getCityByID = async (cityId: string): Promise<City> => {
  const request = await client.get<City>(`/api/city-detail/${cityId}`);
  return request.data;
};

const postCity = async (cityPayload: CityPayload): Promise<void> => {
  await client.post<CityPayload[]>('/api/city-create/', cityPayload);
};

const updateCity = async (cityPayload: UpdateCityPayload): Promise<void> => {
  await client.patch<UpdateCityPayload>(
    `/api/city-update/${cityPayload.id}/`,
    cityPayload,
  );
};

const deleteCity = async (cityId: string): Promise<void> => {
  await client.delete(`/api/city-delete/${cityId}/`);
};

export {
  getCities,
  getAllCities,
  getCityByID,
  postCity,
  updateCity,
  deleteCity,
};
