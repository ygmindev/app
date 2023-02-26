import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { BRIGHTNESS } from '@lib/shared/style/style.constants';
import { ACCOUNT, DEVICE } from '@lib/shared/user/user.constants';

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
      { icon: 'device', id: DEVICE, label: ({ t }) => t('account:labels.device') },
      { icon: 'light', id: 'light', label: ({ t }) => t('style:labels.light') },
      { icon: 'dark', id: 'dark', label: ({ t }) => t('style:labels.dark') },
    ]) as Array<AuthMenuOptionModel>,
  },

  { isDivider: true, isProtected: true },

  {
    icon: 'person',
    id: ACCOUNT,
    isProtected: true,
    label: ({ t }) => t('account:labels.account'),
  },

  {
    color: THEME_COLOR.ERROR,
    icon: 'signout',
    id: SIGN_OUT,
    isProtected: true,
    label: ({ t }) => t('auth:labels.signOut'),
  },
] as Array<AuthMenuOptionModel>);
