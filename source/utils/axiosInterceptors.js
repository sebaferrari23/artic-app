/** @format */

import axios from 'axios';

export function axiosInterceptor() {
  axios.interceptors.response.use(function (response) {
    return response;
  });
}
