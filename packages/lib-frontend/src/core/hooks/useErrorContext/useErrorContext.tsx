import type { UseErrorContextModel } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.models';
import { ErrorContext } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider';
import { ERROR_MODE } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.constants';
import type { ErrorContextModel } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { useContext } from 'react';

export const useErrorContext = (): UseErrorContextModel => {
  const { t } = useTranslation();
  const { error: notify } = useNotification();
  const { errorContextGet, errorContextSet, mode } = useContext(ErrorContext);

  const _errorContextGet = (error: Error): ErrorContextModel => {
    let _errorContext = errorContextGet && errorContextGet(error);
    if (!_errorContext) {
      if (['Network Error'].includes(error.message)) {
        _errorContext = {
          icon: 'offline',
          message: ({ t }) => t('core:messages.errorOffline'),
          mode: ERROR_MODE.FALLBACK,
        };
      } else {
        switch ((error as HttpError).statusCode) {
          case HTTP_STATUS_CODE.UNAUTHORIZED: {
            _errorContext = {
              icon: 'lock',
              message: ({ t }) => t('core:messages.errorUnauthorized'),
            };
            break;
          }
          case HTTP_STATUS_CODE.FORBIDDEN: {
            _errorContext = { icon: 'ban', message: ({ t }) => t('core:messages.errorForbidden') };
            break;
          }
          default: {
            _errorContext = { icon: 'sad', message: ({ t }) => t('core:messages.errorGeneric') };
            break;
          }
        }
      }
    }
    const { icon, message, mode, title } = _errorContext;
    return { icon, message: message && t(message), mode, title: title && t(title) };
  };

  const _handleError = (error: Error): void => {
    const _errorContext = _errorContextGet(error);
    [mode, _errorContext.mode].includes(ERROR_MODE.FALLBACK)
      ? errorContextSet(_errorContext)
      : notify({
          icon: _errorContext.icon,
          message: _errorContext.message ? t(_errorContext.message) : undefined,
          title: _errorContext.title ? t(_errorContext.title) : undefined,
        });
  };

  return { handleError: _handleError };
};
