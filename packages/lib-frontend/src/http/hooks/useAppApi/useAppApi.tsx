import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import type {
  UseAppApiModel,
  UseAppApiParamsModel,
} from '#lib-frontend/http/hooks/useAppApi/useAppApi.models';

export const useAppApi = ({}: UseAppApiParamsModel = {}): UseAppApiModel =>
  useApi({
    host: process.env.APP_SERVER_API_HOST,
    path: '',
    port: process.env.APP_SERVER_API_PORT,
  });
