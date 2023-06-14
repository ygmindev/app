import { useSession } from '#lib-frontend/auth/hooks/useSession/useSession';
import type { UseApiModel, UseApiParamsModel } from '#lib-frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '#lib-frontend/http/hooks/useHttp/useHttp';
import toNumber from 'lodash/toNumber';

export const useApi = ({
  host,
  isCredentials = true,
  onRequest,
  onResponse,
  path,
  port,
}: UseApiParamsModel): UseApiModel => {
  const { getToken } = useSession();
  return useHttp({
    baseUri: {
      host: host || process.env.APP_SERVER_API_HOST,
      path,
      port:
        port || process.env.APP_SERVER_API_PORT
          ? toNumber(process.env.APP_SERVER_API_PORT)
          : undefined,
    },
    onRequest: async (config) => {
      if (isCredentials) {
        const token = await getToken();
        config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
      }
      return onRequest ? onRequest(config) : config;
    },
    onResponse,
  });
};
