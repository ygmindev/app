import { ICON } from '@lib/frontend/core/components/Icon/Icon.constants';
import type { MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import type { SelectOptionModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';
import { SIGN_OUT } from '@lib/shared/auth/auth.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const AUTH_MENU_OPTIONS: Array<MenuOptionModel> = withId([
  { isDivider: true },

  {
    color: THEME_COLOR.ERROR,
    icon: ICON.signout,
    id: SIGN_OUT,
    label: ({ t }) => t('auth:labels.signOut'),
  } as SelectOptionModel,
]);
