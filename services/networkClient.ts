import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

const cache = new Map<string, { data: any; timestamp: number }>();
const REVALIDATE_TIME = 10 * 60 * 1000;

const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < REVALIDATE_TIME;
};

apiClient.interceptors.request.use((config) => {
  const cacheKey = config.url || "";
  const cachedData = cache.get(cacheKey);
  if (cachedData && isCacheValid(cachedData.timestamp)) {
    return {
      ...config,
      data: cachedData.data,
      adapter: () =>
        Promise.resolve({
          config,
          data: cachedData.data,
          status: 200,
          statusText: "OK",
          headers: {},
        }),
    };
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    const cacheKey = response.config.url || "";
    cache.set(cacheKey, { data: response.data, timestamp: Date.now() });
    return response;
  },
  (error) => {
    console.warn(`Erro na requisição: ${error.config.url}`, error);

    if (!error.response) {
      return Promise.resolve({ data: [] });
    }
    return Promise.reject(error);
  }
);

export default apiClient;
