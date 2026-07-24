import {
  type UseApiModel,
  type UseApiParamsModel,
} from '@lib/frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';

export const useApi = ({
  baseUri,
  isCredentials = true,
  ...params
}: UseApiParamsModel = {}): UseApiModel =>
  useHttp({
    ...params,
    baseUri: {
      ...baseUri,
      host: baseUri?.host ?? process.env.SERVER_APP_HOST,
      pathname: baseUri?.pathname ?? '/api',
      port: baseUri?.port ?? process.env.PORT ?? process.env.SERVER_APP_PORT,
    },
    isCredentials,
  });
