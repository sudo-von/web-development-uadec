import { AxiosRequestHeaders } from 'axios';

export interface AxiosConfiguration {
  baseURL: string;
  timeout: number;
  headers: AxiosRequestHeaders;
}

const configuration: AxiosConfiguration = {
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export default configuration;
