import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://data.fx.kg/api/v1/',
  headers: {
    Authorization: 'Bearer utGf9LIBlAzZVhDs7IdiwVBgGCPGD0gahoXGFKpmeeabdb02',
  },
});

export default axiosApi;