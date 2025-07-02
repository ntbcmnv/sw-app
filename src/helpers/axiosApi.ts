import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://data.fx.kg/api/v1/',
  headers: {
    Authorization: 'Bearer 64GcVbv0awttaRxwC7u2boMmxGeA18w1kIYSxsfm11425c15',
  },
});

export default axiosApi;