import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { UseApiModel, UseApiParamsModel } from '@lib/frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';

const APP_SERVER_API_HOST = getEnv('APP_SERVER_API_HOST');
const APP_SERVER_API_PORT = getEnv('APP_SERVER_API_PORT', null) || undefined;

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
      host: host || APP_SERVER_API_HOST,
      path,
      port: port || APP_SERVER_API_PORT,
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
