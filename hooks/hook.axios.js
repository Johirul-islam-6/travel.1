import axios from "axios";


const errorArry = [401, 403, 406, 500, 400];


const instance = axios.create({
  baseURL: JSON.parse(process.env.NEXT_PUBLIC_PRODUCTION) ? 
           process.env.NEXT_PUBLIC_SERVER_HOST : "http://localhost:5000" ,
  timeout: 120*1000,
  withCredentials: true,
});


instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (errorArry.includes(error.response?.status)) {
      console.log(error);
      return Promise.reject(error.response);
    }
    else{return Promise.reject(error);}
  }
);


export default instance;
