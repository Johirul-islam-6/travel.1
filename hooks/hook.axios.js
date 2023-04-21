import axios from "axios";


const errorArry = [401, 403, 406, 500, 400];


const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  withCredentials: true,
});


instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (errorArry.includes(error.response.status)) {
      console.log(error);
      return Promise.reject();
    }
    return Promise.reject(error);
  }
);


export default instance;
