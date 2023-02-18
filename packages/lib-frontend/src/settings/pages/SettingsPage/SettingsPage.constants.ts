import type { TranslatableOptionModel } from '@lib/frontend/locale/locale.models';
import { ACCOUNT } from '@lib/frontend/user/user.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const SETTINGS_NAVBAR_OPTIONS: Array<TranslatableOptionModel> = withId([
  {
    icon: 'person',
    id: ACCOUNT,
    label: ({ t }) => t('user:labels.account'),
  },
]) as Array<TranslatableOptionModel>;
