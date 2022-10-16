import { useSession } from '@lib/frontend/auth/hooks/useSession/useSession';
import type { UseApiModel } from '@lib/frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';

const REACT_APP_SERVER_API_HOST = getEnv('REACT_APP_SERVER_API_HOST');
const REACT_APP_SERVER_API_PORT = getEnv('REACT_APP_SERVER_API_PORT', null) || undefined;

export const useApi: UseApiModel = ({
  host,
  isCredentials = true,
  onRequest,
  onResponse,
  path,
  port,
}) => {
  const { getToken } = useSession();
  return useHttp({
    baseUri: {
      host: host || REACT_APP_SERVER_API_HOST,
      path,
      port: port || REACT_APP_SERVER_API_PORT,
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
