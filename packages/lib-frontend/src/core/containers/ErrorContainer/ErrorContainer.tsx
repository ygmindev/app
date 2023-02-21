import { Button } from '@lib/frontend/core/components/Button/Button';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import type { ErrorContainerPropsModel } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotificationModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/errors/HttpError/HttpError.constants';
import { useCallback } from 'react';

export const ErrorContainer: SFCModel<ErrorContainerPropsModel> = ({
  children,
  getError,
  mode,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { error: notify } = useNotification();

  const _getError = (error: Error): Pick<NotificationModel, 'icon' | 'message'> => {
    const _error = getError && getError(error);
    if (_error) {
      return _error;
    } else {
      if (['Network Error'].includes(error.message)) {
        return { icon: 'offline', message: t('core:messages.errorOffline') };
      }

      switch ((error as HttpError).statusCode) {
        case HTTP_STATUS_CODE.UNAUTHORIZED:
          return { icon: 'lock', message: t('core:messages.errorUnauthorized') };
        case HTTP_STATUS_CODE.FORBIDDEN:
          return { icon: 'ban', message: t('core:messages.errorForbidden') };
        default:
          return { icon: 'sad', message: t('core:messages.errorGeneric') };
      }
    }
  };

  const _getErrorElement = useCallback((error?: Error) => {
    if (error) {
      const { icon, message } = _getError(error);
      return (
        <Wrapper
          grow
          isCenter
          spacing={THEME_SIZE.SMALL}>
          <Icon
            fontSize={THEME_SIZE.XLARGE}
            icon={icon || 'sad'}
          />

          <Text>{message || t('core:messages.errorGeneric')}</Text>
        </Wrapper>
      );
    }
    return null;
  }, []);

  const _notifyError = (error: Error): void => {
    const { icon, message } = _getError(error);
    notify({ icon, message });
  };

  return (
    <ErrorBoundary
      Fallback={
        mode === ERROR_CONTAINER_MODE.FALLBACK
          ? ({ error, handleReset }) => (
              <Wrapper
                grow
                isCenter
                spacing>
                {_getErrorElement(error)}

                <Button
                  icon="refresh"
                  onPress={handleReset}>
                  {t('core:labels.tryAgain')}
                </Button>
              </Wrapper>
            )
          : undefined
      }
      onError={mode === ERROR_CONTAINER_MODE.NOTIFICATION ? _notifyError : undefined}
      style={styles}
      testID={testID}>
      {children}
    </ErrorBoundary>
  );
};
