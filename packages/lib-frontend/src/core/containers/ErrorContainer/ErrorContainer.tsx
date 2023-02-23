import { Button } from '@lib/frontend/core/components/Button/Button';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ERROR_CONTAINER_MODE } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.constants';
import type { ErrorContainerPropsModel } from '@lib/frontend/core/containers/ErrorContainer/ErrorContainer.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import type { TranslatableNotificationModel } from '@lib/frontend/notification/notification.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { FONT_TYPE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
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

  const _getError = (
    error: Error,
  ): Pick<TranslatableNotificationModel, 'icon' | 'title' | 'message'> => {
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
      const { icon, message, title } = _getError(error);
      return (
        <Wrapper
          grow
          isCenter
          spacing={THEME_SIZE.SMALL}>
          <Icon
            fontSize={THEME_SIZE.XLARGE}
            icon={icon || 'sad'}
          />

          {title && <TranslatableText type={FONT_TYPE.HEADLINE}>{title}</TranslatableText>}

          {message && (
            <TranslatableText>{message || t('core:messages.errorGeneric')}</TranslatableText>
          )}
        </Wrapper>
      );
    }
    return null;
  }, []);

  const _notifyError = (error: Error): void => {
    const { icon, message, title } = _getError(error);
    notify({
      icon,
      message: message ? t(message) : undefined,
      title: title ? t(title) : undefined,
    });
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
