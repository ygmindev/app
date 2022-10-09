import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';

export const SIGN_IN = 'signIn';

export const OAUTH_REDIRECT = 'oAuthRedirect';

export const UNAUTHENTICATED_ERROR_ALERT: AlertDataModel = {
  color: THEME_COLOR.ERROR,
  icon: ICON.lock,
  message: ({ t }) => t('auth:messages.unauthenticatedError'),
};

export const UNAUTHORIZED_ERROR_ALERT: AlertDataModel = {
  color: THEME_COLOR.ERROR,
  icon: ICON.ban,
  message: ({ t }) => t('auth:messages.unauthorizedError'),
};
