import type { UseErrorContextModel } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.models';
import { ErrorContext } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import type { ErrorContextModel } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { error } from '@lib/shared/logging/utils/logger/logger';
import { useContext } from 'react';

export const useErrorContext = (): UseErrorContextModel => {
  const { t } = useTranslation();
  const { error: notify } = useNotification();
  const { errorContextGet, errorContextSet, mode } = useContext(ErrorContext);

  const errorContextGetF = (e: Error): ErrorContextModel => {
    let errorContext = errorContextGet && errorContextGet(e);
    if (!errorContext) {
      error(e);
      switch ((e as HttpError).statusCode) {
        case HTTP_STATUS_CODE.FORBIDDEN: {
          errorContext = { icon: 'ban', message: ({ t }) => t('core:messages.errorForbidden') };
          break;
        }
        case HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT: {
          errorContext = {
            icon: 'offline',
            message: ({ t }) => t('core:messages.errorOffline'),
            mode: ERROR_MODE.FALLBACK,
          };
        }
        case HTTP_STATUS_CODE.UNAUTHORIZED: {
          errorContext = {
            icon: 'lock',
            message: ({ t }) => t('core:messages.errorUnauthorized'),
          };
          break;
        }
        default: {
          errorContext = { icon: 'sad', message: ({ t }) => t('core:messages.errorGeneric') };
          break;
        }
      }
    }
    const { icon, message, mode, title } = errorContext;
    return { icon, message: message && t(message), mode, title: title && t(title) };
  };

  const handleError = (error: Error): void => {
    const errorContext = errorContextGetF(error);
    [mode, errorContext.mode].includes(ERROR_MODE.FALLBACK)
      ? errorContextSet(errorContext)
      : notify({
          icon: errorContext.icon,
          message: errorContext.message ? t(errorContext.message) : undefined,
          title: errorContext.title ? t(errorContext.title) : undefined,
        });
  };

  return { handleError };
};
