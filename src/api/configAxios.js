import axios from "axios"
// import jwt_decode from "jwt-decode";
// import { useSelector, useDispatch } from 'react-redux';
// import { loginForm } from '../component/redux/feature/auth';
const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Content-Type":"application/json"
    }
})
instance.defaults.headers.common['Authorization'] = "Bearer author_base64 "
instance.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8"
// const decodeToken = (token) => {
//     // console.log(token, 5555);
//     // const dispatch = useDispatch()
//     try {
//         const decodedToken = jwt_decode(token);

//         if (!decodedToken) {
//             console.log('error');
//         }
//         return decodedToken;
//     } catch (error) {
//         console.log(error);
//     }
// }
// const headerToken = decodeToken(localStorage.getItem('user'))
// console.log(headerToken, 666);
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
 // Do something with request error
 return Promise.reject(error)
})
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response) {
        // const decodeAuthLogin = loginForm(decodeToken(response?.data?.accessToken))
        // console.log(decodeAuthLogin, 76);
        // dispatch(decodeAuthLogin)
        return response
    }
    // const headerToken = decodeToken(response?.data?.accessToken)
    // console.log(headerToken, 'ok response');
    // console.log(response, 7888);
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
})
export default instance
