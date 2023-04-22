import { PAYMENT } from '@lib/frontend/billing/billing.constants';
import type { TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const ACCOUNT_OPTIONS: Array<TranslatableOptionModel> = withId([
  {
    icon: 'person',
    id: PERSONAL,
    label: ({ t }) => t('account:labels.personal'),
  },

  {
    icon: 'dollar',
    id: PAYMENT,
    label: ({ t }) => t('billing:labels.payment'),
  },

  {
    icon: 'settings',
    id: SETTINGS,
    label: ({ t }) => t('settings:labels.settings'),
  },
]) as Array<TranslatableOptionModel>;
