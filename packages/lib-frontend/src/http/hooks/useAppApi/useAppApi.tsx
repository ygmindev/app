import { useApi } from '#lib-frontend/http/hooks/useApi/useApi';
import {
  type UseAppApiModel,
  type UseAppApiParamsModel,
} from '#lib-frontend/http/hooks/useAppApi/useAppApi.models';

export const useAppApi = ({}: UseAppApiParamsModel = {}): UseAppApiModel =>
  useApi({
    host: process.env.SERVER_HOST,
    path: '',
    port: process.env.SERVER_PORT,
  });
