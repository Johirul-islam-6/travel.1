// import axios from "axios"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const errorArry = [401,403,406,500,400]
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
=======
>>>>>>> b1266b54056505c9356ef99835c662d1203b11cd
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  withCredentials: true
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
 if ( errorArry.includes(error.response.status)) {
  console.log(error)
  // return Promise.reject()
 }
 return Promise.reject(error);
});

export default instance

=======
// const instance = axios.create({
//   baseURL: 'http://localhost:5000',
//   timeout: 1000,
//   withCredentials: true
// });

// export default instance
>>>>>>> master
