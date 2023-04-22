import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export interface AuthMenuOptionModel extends MenuOptionModel {
  isProtected?: boolean;
}

export const AUTH_MENU_OPTIONS: Array<AuthMenuOptionModel> = withId([
  { isDivider: true },

  {
    icon: 'personCircle',
    id: ACCOUNT,
    isProtected: true,
    label: ({ t }) => t('account:labels.account'),
  },

  { isDivider: true, isProtected: true },

  {
    color: THEME_COLOR.ERROR,
    icon: 'signout',
    id: SIGN_OUT,
    isProtected: true,
    label: ({ t }) => t('auth:labels.signOut'),
  },
] as Array<AuthMenuOptionModel>);
