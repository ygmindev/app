import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { DEVICE, SETTINGS } from '@lib/shared/settings/settings.constants';
import { BRIGHTNESS } from '@lib/shared/style/style.constants';

export interface AuthMenuOptionModel extends MenuOptionModel {
  isProtected?: boolean;
}

export const AUTH_MENU_OPTIONS: Array<AuthMenuOptionModel> = withId([
  { isDivider: true },

  {
    icon: 'brightness',
    id: BRIGHTNESS,
    label: ({ t }) => t('style:labels.brightness'),
    subOptions: withId([
      { icon: 'device', id: DEVICE, label: ({ t }) => t('settings:labels.device') },
      { icon: 'light', id: 'light', label: ({ t }) => t('style:labels.light') },
      { icon: 'dark', id: 'dark', label: ({ t }) => t('style:labels.dark') },
    ]) as Array<AuthMenuOptionModel>,
  },

  { isDivider: true, isProtected: true },

  {
    icon: 'settings',
    id: SETTINGS,
    isProtected: true,
    label: ({ t }) => t('settings:labels.settings'),
  },

  {
    color: THEME_COLOR.ERROR,
    icon: 'signout',
    id: SIGN_OUT,
    isProtected: true,
    label: ({ t }) => t('auth:labels.signOut'),
  },
] as Array<AuthMenuOptionModel>);
