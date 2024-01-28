import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import {
  type UseHttpModel,
  type UseHttpParamsModel,
} from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { CONNECTIVITY } from '@lib/frontend/http/http.constants';
import { getConnectivity } from '@lib/frontend/http/utils/getConnectivity/getConnectivity';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { HttpImplementation } from '@lib/shared/http/utils/HttpImplementation/HttpImplementation';

export const useHttp = (params: UseHttpParamsModel = {}): UseHttpModel => {
  const { handleError } = useErrorContext();
  return new HttpImplementation({
    ...params,
    onError: async (e) => {
      const eF =
        e.message === 'Network Error' || (await getConnectivity()) === CONNECTIVITY.OFFLINE
          ? new OfflineError()
          : e;
      handleError(eF);
    },
  });
};
