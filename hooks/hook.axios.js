import axios from "axios";

<<<<<<< HEAD
const errorArry = [401,403,406,500,400]
=======
const errorArry = [401, 403, 406, 500, 400];
>>>>>>> 28a00d1562bf3fc6ed937639bdccb6d45d71b1e9

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
  withCredentials: true,
});

<<<<<<< HEAD
instance.interceptors.response.use(response => {
  return response;
}, error => {
 if ( errorArry.includes(error.response.status)) {
  console.log(error)
  return Promise.reject()
 }
 return Promise.reject(error);
});

export default instance
=======
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
>>>>>>> 28a00d1562bf3fc6ed937639bdccb6d45d71b1e9

export default instance;
