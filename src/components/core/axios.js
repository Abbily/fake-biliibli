import axios from 'axios';

//if(process.env.NODE_ENV == 'development'){
//	axios.defaults.baseURL = '/api';
//}

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;


axios.interceptors.request.use((config) => {
    //console.log(config,123);
    return config;
  },err => {
      return Promise.reject(err);
  });


axios.interceptors.response.use((config) => {
    if(config.status == 200){
      return config;
    }
  }, error => {
    return Promise.reject(error);
  });
export default axios;
