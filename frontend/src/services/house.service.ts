import client from 'src/helpers/private-axios-helper';

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

export default postHouse;
