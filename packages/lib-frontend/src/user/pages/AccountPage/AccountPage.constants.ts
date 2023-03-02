import { PAYMENT } from '@lib/frontend/billing/billing.constants';
import type { TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import { withId } from '@lib/shared/core/decorators/withId/withId';

export const ACCOUNT_NAVBAR_OPTIONS: Array<TranslatableOptionModel> = withId([
  {
    icon: 'id',
    id: PERSONAL,
    label: ({ t }) => t('account:labels.personal'),
  },

  {
    icon: 'dollar',
    id: PAYMENT,
    label: ({ t }) => t('billing:labels.payment'),
  },
]) as Array<TranslatableOptionModel>;
