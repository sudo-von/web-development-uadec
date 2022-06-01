import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import configuration from 'src/helpers/axios-configuration-helper';
import { getToken } from 'src/services/token.service';

const client = axios.create(configuration);

const handleHeader = async (config: AxiosRequestConfig) => {
  const token = await getToken();
  if (config.headers) {
    config.headers.Authorization = `Token ${token?.token}`;
  }
  return config;
};

const handleError = (error: AxiosError): Promise<AxiosError> => {
  throw new Error('Ha ocurrido un error');
};

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  handleError,
);

client.interceptors.request.use(handleHeader, handleError);

export default client;
