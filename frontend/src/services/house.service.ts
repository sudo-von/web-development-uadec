import { Filters } from 'src/components/Navside/Components/MidNavside/MidNavside';
import client from 'src/helpers/private-axios-helper';
import publicClient from 'src/helpers/public-axios-helper';
const FileDownload = require('js-file-download');
export interface House {
  id: string;
  Description: string;
  CP: string;
  Price: string;
  Rooms: string;
  Baths: string;
  IdCity: string;
  IdModel: string;
  IdState: string;
  is_sold: boolean;
  house_image: File | null;
  location: string;
}
export interface HousePayload {
  Description: string;
  CP: string;
  Price: string;
  Rooms: string;
  Baths: string;
  IdCity: string;
  IdModel: string;
  IdState: string;
  house_image: File | null;
  location: string;
}

export interface UpdateHousePayload {
  id: string;
  Description: string;
  CP: string;
  Price: string;
  Rooms: string;
  Baths: string;
  IdCity: string;
  IdModel: string;
  IdState: string;
  house_image: File | null;
  location: string;
}

const postHouse = async ({
  Description,
  CP,
  Price,
  Rooms,
  Baths,
  IdCity,
  IdModel,
  IdState,
  house_image,
  location,
}: HousePayload): Promise<void> => {
  const formData = new FormData();
  formData.append('Description', Description);
  formData.append('CP', CP);
  formData.append('Price', Price);
  formData.append('Rooms', Rooms);
  formData.append('Baths', Baths);
  formData.append('IdCity', IdCity);
  formData.append('IdModel', IdModel);
  formData.append('IdState', IdState);
  formData.append('house_image', house_image as Blob);
  formData.append('location', location);
  console.log(house_image as Blob);
  await client.post('/api/house-create/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

const getHouses = async (): Promise<House[]> => {
  const request = await publicClient.get<House[]>('/api/house-list');
  return request.data;
};

const getHousesWithFilters = async (filters: string): Promise<House[]> => {
  const request = await publicClient.get<House[]>('/api/house-list' + filters);
  return request.data;
};

const getHouseByID = async (houseId: string): Promise<House> => {
  const request = await publicClient.get<House>(
    `/api/house-detail/${houseId}/`,
  );
  return request.data;
};

const getHouseReportByID = async (houseId: string): Promise<void> => {
  const request = await publicClient.get(
    `/api/house-detail-report/${houseId}/`,
  );
  FileDownload(request.data, 'report.pdf');
};

const getHouseReport = async (): Promise<void> => {
  const request = await publicClient.get(`/api/house-report`);
  FileDownload(request.data, 'report.pdf');
};

const updateHouse = async (houseUpdate: UpdateHousePayload): Promise<void> => {
  await client.patch<UpdateHousePayload>(
    `/api/house-update/${houseUpdate.id}/`,
    houseUpdate,
  );
};

const deleteHouse = async (houseId: string): Promise<void> => {
  await client.delete(`/api/house-delete/${houseId}/`);
};

export {
  getHouses,
  postHouse,
  getHouseReport,
  getHouseReportByID,
  getHousesWithFilters,
  deleteHouse,
  getHouseByID,
  updateHouse,
};
