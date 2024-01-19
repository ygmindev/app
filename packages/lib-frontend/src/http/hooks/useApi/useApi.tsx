import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import {
  type UseApiModel,
  type UseApiParamsModel,
} from '@lib/frontend/http/hooks/useApi/useApi.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { type CredentialsModel } from '@lib/shared/auth/auth.models';
import toNumber from 'lodash/toNumber';
import { useRef } from 'react';

export const useApi = ({
  host,
  isCredentials = true,
  onRequest,
  onResponse,
  pathname,
  port,
}: UseApiParamsModel): UseApiModel => {
  const credentials = useCredentials();
  const credentialsRef = useRef<CredentialsModel>();
  credentialsRef.current = credentials;
  return useHttp({
    baseUri: { host: host ?? '', pathname, port: port ? toNumber(port) : undefined },
    onRequest: async (config) => {
      isCredentials && (config.headers = { ...config.headers, ...credentialsRef.current });
      return onRequest ? onRequest(config) : config;
    },
    onResponse,
  });
};
