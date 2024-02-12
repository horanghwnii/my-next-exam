import axios from 'axios';
import AuthAPI from './auth/auth.api';
import TilAPI from './til/til.api';

const coreAuthClient = axios.create({
  baseURL: 'https://port-0-auth-server-qrd2als49b8m4.sel5.cloudtype.app',
});

// const coreTilClient = axios.create({
//   baseURL: 'https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app',
// });

const corePostsClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

class API {
  static auth = new AuthAPI(coreAuthClient);
  static til = new TilAPI(corePostsClient);

  static setAccessToken(accessToken: string) {
    coreAuthClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  static removeAccessToken() {
    coreAuthClient.defaults.headers.common.Authorization = '';
  }
}

export default API;
