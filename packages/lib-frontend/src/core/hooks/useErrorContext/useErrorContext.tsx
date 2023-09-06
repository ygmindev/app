import { useContext } from 'react';

import { asyncBoundaryContext } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { ERROR_MODE } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.constants';
import { type ErrorContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type UseErrorContextModel } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { type HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '#lib-shared/http/errors/HttpError/HttpError.constants';
import { error } from '#lib-shared/logging/utils/logger/logger';

export const useErrorContext = (): UseErrorContextModel => {
  const { t } = useTranslation();
  const { error: notify } = useNotification();
  const { errorContextGet, errorContextSet, errorMode } = useContext(asyncBoundaryContext);

  const errorContextGetF = (e: Error): ErrorContextModel => {
    let errorContext = errorContextGet && errorContextGet(e);
    if (!errorContext) {
      error(e);
      switch ((e as HttpError).statusCode) {
        case HTTP_STATUS_CODE.FORBIDDEN: {
          errorContext = { icon: 'ban', message: ({ t }) => t('core:errorForbidden') };
          break;
        }
        case HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT: {
          errorContext = {
            errorMode: ERROR_MODE.FALLBACK,
            icon: 'offline',
            message: ({ t }) => t('core:errorOffline'),
          };
          break;
        }
        case HTTP_STATUS_CODE.UNAUTHORIZED: {
          errorContext = {
            icon: 'lock',
            message: ({ t }) => t('core:errorUnauthorized'),
          };
          break;
        }
        default: {
          errorContext = { icon: 'sad', message: ({ t }) => t('core:errorGeneric') };
          break;
        }
      }
    }
    const { errorMode, icon, message, title } = errorContext;
    return { errorMode, icon, message: message && t(message), title: title && t(title) };
  };

  const handleError = (error: Error): void => {
    const errorContext = errorContextGetF(error);
    [errorMode, errorContext.errorMode].includes(ERROR_MODE.FALLBACK)
      ? errorContextSet(errorContext)
      : notify({
          icon: errorContext.icon,
          message: errorContext.message ? t(errorContext.message) : undefined,
          title: errorContext.title ? t(errorContext.title) : undefined,
        });
  };

  return { handleError };
};
