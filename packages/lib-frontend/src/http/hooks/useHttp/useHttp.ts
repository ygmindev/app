import type { UseHttpModel } from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { NETWORK_ALERT, UNKNOWN_ALERT } from '@lib/frontend/notification/notification.constants';
import { NetworkError } from '@lib/shared/core/errors/NetworkError/NetworkError';
import { HttpService } from '@lib/shared/http/utils/HttpService/HttpService';

export const useHttp: UseHttpModel = ({ onError, ...params }) => {
  const { alertAdd } = useAlert();
  return new HttpService({
    ...params,

    onError: async (e) => {
      alertAdd(
        ['Network Error', '503'].includes(e.message) || e instanceof NetworkError
          ? NETWORK_ALERT
          : UNKNOWN_ALERT,
      );
      return onError && onError(e);
    },
  });
};
