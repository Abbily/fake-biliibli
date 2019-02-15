import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

let baseAxios;

if (process.env.NODE_ENV === 'production') {
  baseAxios = axios.create({
    baseURL: 'https://api.rozwel.club/api/bilibili/api/',
    timeout: 5000
  })
} else {
  baseAxios = axios.create({
    baseURL: '/api',
    timeout: 5000
  })
}
export default baseAxios;
