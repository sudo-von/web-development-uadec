import axios from 'axios';
import configuration from 'src/helpers/axios-configuration-helper';

const client = axios.create(configuration);

export default client;
