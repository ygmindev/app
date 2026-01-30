import { asyncBoundaryContext } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary';
import { type ErrorContextModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { ERROR_TYPE } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.constants';
import { type UseErrorContextModel } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { useContext } from 'react';

export const useErrorContext = (): UseErrorContextModel => {
  const { t } = useTranslation();
  const { error: notify } = useNotification();
  const { errorContextGet, errorContextSet } = useContext(asyncBoundaryContext);

  const errorContextGetF = (e: Error): ErrorContextModel => {
    let errorContext = errorContextGet && errorContextGet(e);
    if (!errorContext) {
      logger.error(e);
      switch ((e as HttpError).statusCode) {
        case HTTP_STATUS_CODE.FORBIDDEN: {
          errorContext = { description: ({ t }) => t('core:errorForbidden'), icon: 'ban' };
          break;
        }
        // case HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT: {
        //   errorContext = { description: ({ t }) => t('core:errorOffline'), icon: 'offline' };
        //   break;
        // }
        case HTTP_STATUS_CODE.UNAUTHORIZED: {
          errorContext = { description: ({ t }) => t('core:errorUnauthorized'), icon: 'lock' };
          break;
        }
        default: {
          errorContext = {
            description: ({ t }) => t('core:errorGeneric'),
            icon: 'sad',
            title: ({ t }) => t('core:somethingWentWrong'),
          };
          break;
        }
      }
    }
    const { description, icon, title } = errorContext;
    return { description: description && t(description), icon, title: title && t(title) };
  };

  return {
    handleError: (error, type): void => {
      const errorContext = errorContextGetF(error);
      const typeF =
        type ??
        ((error as HttpError).statusCode === HTTP_STATUS_CODE.NETWORK_CONNECT_TIMEOUT
          ? ERROR_TYPE.FALLBACK
          : ERROR_TYPE.NOTIFICATION);
      typeF === ERROR_TYPE.FALLBACK
        ? errorContextSet(errorContext)
        : void notify({
            description: errorContext.description ? t(errorContext.description) : undefined,
            icon: errorContext.icon,
            title: errorContext.title ? t(errorContext.title) : undefined,
          });
    },
  };
};
