import toNumber from 'lodash/toNumber';

import { useSession } from '#lib-frontend/auth/hooks/useSession/useSession';
import {
  type UseApiModel,
  type UseApiParamsModel,
} from '#lib-frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '#lib-frontend/http/hooks/useHttp/useHttp';

export const useApi = ({
  host,
  isCredentials = true,
  onRequest,
  onResponse,
  pathname,
  port,
}: UseApiParamsModel): UseApiModel => {
  const { getToken } = useSession();
  return useHttp({
    baseUri: { host: host ?? '', pathname, port: port ? toNumber(port) : undefined },
    onRequest: async (config) => {
      if (isCredentials) {
        const token = await getToken();
        token && (config.headers = { ...config.headers, Authorization: `Bearer ${token}` });
      }
      return onRequest ? onRequest(config) : config;
    },
    onResponse,
  });
};
