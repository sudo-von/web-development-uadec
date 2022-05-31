import axios, { AxiosResponse, AxiosError } from 'axios';
import configuration from 'src/helpers/axios-configuration-helper';

const client = axios.create(configuration);

const handleError = (error: AxiosError): Promise<AxiosError> => {
  throw new Error('Ha ocurrido un error');
};

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  handleError,
);

export default client;
