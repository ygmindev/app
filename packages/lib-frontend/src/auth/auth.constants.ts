import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { AlertDataModel } from '@lib/frontend/notification/components/Alert/Alert.models';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';

export const SIGN_IN = 'signIn';

export const OAUTH_REDIRECT = 'oAuthRedirect';

export const AUTHENTICATION_ERROR: AlertDataModel = {
  color: THEME_COLOR.ERROR,
  icon: ICON.offline,
  message: ({ t }) => t('auth:messages.authenticationError'),
};
