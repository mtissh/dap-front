import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

// リクエストの送信に失敗したらPromiseをreject
axiosInstance.interceptors.request.use(
  (request) => request,
  (error) =>  Promise.reject(error),
);

// レスポンス発行時
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response?.status) {
      // バリデーションエラー時
      case 422:
        const message: { [key: string]: string } = {};
        const errorObjs: { [key: string]: string } = error.response?.data.errors;

        for (const [key, value] of Object.entries(errorObjs)) {
          message[key] = value;
        }

        return Promise.reject({
          status: error.response?.status,
          data: message,
        });
        
      default:
        return Promise.reject({
          status: error.response?.status,
          data: { message: error.response?.data.message ?? 'システムエラーです。', url: error.response?.config.url },
        });
    }
  },
);

export default axiosInstance;