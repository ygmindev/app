import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const AUTH_MENU_USERNAME_WIDTH = 150;

export const AUTH_MENU_OPTIONS: Array<MenuOptionModel> = withId([
  { isDivider: true },

  {
    icon: ICON.settings,
    id: SETTINGS,
    label: ({ t }) => t('settings:labels.settings'),
  } as SelectOptionModel,

  {
    color: THEME_COLOR.ERROR,
    icon: ICON.signout,
    id: SIGN_OUT,
    label: ({ t }) => t('auth:labels.signOut'),
  } as SelectOptionModel,
]);
