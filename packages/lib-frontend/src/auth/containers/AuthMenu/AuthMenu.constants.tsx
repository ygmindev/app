import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { SETTINGS } from '@lib/shared/settings/settings.constants';
import { THEME } from '@lib/shared/style/style.constants';

export const AUTH_MENU_USERNAME_WIDTH = 150;

export const AUTH_MENU_OPTIONS: Array<MenuOptionModel> = withId([
  { isDivider: true },

  {
    icon: 'settings',
    id: SETTINGS,
    label: ({ t }) => t('settings:labels.settings'),

    subOptions: withId([
      {
        id: THEME,
        label: ({ t }) => t('style:labels.theme'),
      },
    ]) as Array<MenuOptionModel>,
  },

  {
    color: THEME_COLOR.ERROR,
    icon: 'signout',
    id: SIGN_OUT,
    label: ({ t }) => t('auth:labels.signOut'),
  },
] as Array<MenuOptionModel>);
