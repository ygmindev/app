import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import {
  type UseApiModel,
  type UseApiParamsModel,
} from '@lib/frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import toNumber from 'lodash/toNumber';

export const useApi = ({
  host,
  isCredentials = true,
  onRequest,
  onResponse,
  pathname,
  port,
}: UseApiParamsModel): UseApiModel => {
  const { getCredentials } = useCredentials();
  return useHttp({
    baseUri: { host: host ?? '', pathname, port: port ? toNumber(port) : undefined },
    onRequest: async (config) => {
      isCredentials && (config.headers = { ...config.headers, ...(await getCredentials()) });
      return onRequest ? onRequest(config) : config;
    },
    onResponse,
  });
};
