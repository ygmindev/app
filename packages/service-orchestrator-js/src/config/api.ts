import { apiConfig as configBase } from '@lib/config/api/api';

let apiConfig = configBase;

apiConfig = apiConfig.extend(() => ({
  routes: [],
}));

export { apiConfig };
