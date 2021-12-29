import axios from 'axios';

class API {
  constructor() {
    this.service = axios.create();
  }

  get(path, params) {
    return this.service.get(path, {params});
  }
}

export default new API();