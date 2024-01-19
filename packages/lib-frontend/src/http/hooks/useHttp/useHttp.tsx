import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import {
  type UseHttpModel,
  type UseHttpParamsModel,
} from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { CONNECTIVITY } from '@lib/frontend/http/http.constants';
import { getConnectivity } from '@lib/frontend/http/utils/getConnectivity/getConnectivity';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { HttpService } from '@lib/shared/http/utils/HttpService/HttpService';

export const useHttp = (params: UseHttpParamsModel = {}): UseHttpModel => {
  const { handleError } = useErrorContext();
  return new HttpService({
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
