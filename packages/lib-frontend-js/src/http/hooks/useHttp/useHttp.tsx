import { useCredentials } from '@lib/frontend/auth/hooks/useCredentials/useCredentials';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import {
  type UseHttpModel,
  type UseHttpParamsModel,
} from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { CONNECTIVITY } from '@lib/frontend/http/http.constants';
import { getConnectivity } from '@lib/frontend/http/utils/getConnectivity/getConnectivity';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { HttpImplementation } from '@lib/shared/http/utils/HttpImplementation/HttpImplementation';

export const useHttp = ({
  isCredentials,
  onRequest,
  onResponse,
  ...params
}: UseHttpParamsModel = {}): UseHttpModel => {
  const { handleError } = useErrorContext();
  const [isOffline, isOfflineSet] = useStore('app.isOffline');
  const { getCredentials } = useCredentials();
  return new HttpImplementation({
    ...params,
    onError: async (e) => {
      const isOfflineError =
        e.message === 'Network Error' || (await getConnectivity()) === CONNECTIVITY.OFFLINE;
      isOfflineError && !isOffline && isOfflineSet(true);
      const eF = isOfflineError ? new OfflineError() : e;
      handleError(eF);
    },
    onRequest: async (config) => {
      isCredentials && (config.headers = { ...config.headers, ...(await getCredentials()) });
      return onRequest ? onRequest(config) : config;
    },
    onResponse: async (response) => {
      isOffline && isOfflineSet(false);
      return onResponse ? onResponse(response) : response;
    },
  });
};
