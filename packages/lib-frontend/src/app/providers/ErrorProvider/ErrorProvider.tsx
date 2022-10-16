import type { ErrorProviderPropsModel } from '@lib/frontend/app/providers/ErrorProvider/ErrorProvider.models';
import { UNAUTHORIZED_ERROR_ALERT } from '@lib/frontend/auth/auth.constants';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { NETWORK_ALERT, UNKNOWN_ALERT } from '@lib/frontend/notification/notification.constants';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_ERROR_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { error } from '@lib/shared/logging/utils/logger/logger';

export const ErrorProvider: FCModel<ErrorProviderPropsModel> = ({ children }) => {
  const { alertAdd } = useAlert();

  const _handleError = async (e: Error): Promise<void> => {
    const alert = (() => {
      if (['Network Error'].includes(e.message)) {
        return NETWORK_ALERT;
      }
      switch ((e as unknown as HttpError).statusCode) {
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

    alertAdd({ ...alert, message: e.message || alert.message });

    error(e);
    throw e;
  };

  return <ErrorBoundary onError={_handleError}>{children}</ErrorBoundary>;
};
