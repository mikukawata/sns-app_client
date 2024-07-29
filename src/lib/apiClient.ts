import axios from 'axios';

// axiosで使う共通の設定をする
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
