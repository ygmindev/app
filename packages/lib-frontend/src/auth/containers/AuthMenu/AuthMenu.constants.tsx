import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { SETTINGS } from '@lib/shared/settings/settings.constants';

export const AUTH_MENU_USERNAME_WIDTH = 150;

export const AUTH_MENU_OPTIONS: Array<TranslatableOptionModel> = withId([
  { isDivider: true },

  {
    icon: 'settings',
    id: SETTINGS,
    label: ({ t }) => t('settings:labels.settings'),
  },

  {
    color: THEME_COLOR.ERROR,
    icon: 'signout',
    id: SIGN_OUT,
    label: ({ t }) => t('auth:labels.signOut'),
  },
] as Array<TranslatableOptionModel>);
