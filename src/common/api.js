import axios from 'axios';

import { errorHandler } from './errors';

class API {
  constructor() {
    this.service = axios.create();

    this.service.interceptors.response.use(
      (response) => {
        // если ответ от сервера успешен, но мы должны обработать его как ошибку
        // например, не найден активный квиз, то передаем ответ в обработчик
        if(!response.data.status) {
          return Promise.reject(errorHandler(response));
        }

        return response;
      },
      (error) => {
        return Promise.reject(errorHandler(error));
      }
    );
  }

  get(path, params) {
    return this.service.get(path, { params });
  }

  post(path, params) {
    return this.service.post(path, { params });
  }
}

export default new API();