import { UNAUTHORIZED_ERROR_ALERT } from '@lib/frontend/auth/auth.constants';
import type { UseHttpModel } from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { NETWORK_ALERT, UNKNOWN_ALERT } from '@lib/frontend/notification/notification.constants';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_ERROR_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { HttpService } from '@lib/shared/http/utils/HttpService/HttpService';
import type { GraphQLError } from 'graphql';
import { get } from 'lodash';

export const useHttp: UseHttpModel = ({ onError, ...params }) => {
  const { alertAdd } = useAlert();
  return new HttpService({
    ...params,

    onError: async (error) => {
      const alert = (() => {
        if (['Network Error'].includes(error.message)) {
          return NETWORK_ALERT;
        }
        switch ((error as unknown as HttpError).statusCode) {
          case HTTP_ERROR_STATUS_CODE.UNAUTHORIZED:
            return UNAUTHORIZED_ERROR_ALERT;
          case HTTP_ERROR_STATUS_CODE.FORBIDDEN:
            return UNAUTHORIZED_ERROR_ALERT;
          case HTTP_ERROR_STATUS_CODE.SERVICE_UNAVAILABLE:
            return NETWORK_ALERT;
          default:
            return UNKNOWN_ALERT;
        }
      })();

      alertAdd({ ...alert, isPermanent: true, message: error.message || alert.message });

      return onError && onError(error);
    },

    onResponse: async (respone) => {
      const graphQlError = get(respone, ['data', 'errors', 0]) as GraphQLError;
      if (graphQlError) {
        throw new HttpError(graphQlError.extensions.statusCode, graphQlError.message);
      }
    },
  });
};
