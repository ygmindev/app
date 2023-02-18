import type { AccountPageItemModel } from '@lib/frontend/user/pages/AccountPage/AccountPage.models';
import { EMAIL, NAME } from '@lib/frontend/user/user.constants';

export const ACCOUNT_PAGE_FIELDS: Array<AccountPageItemModel> = [
  {
    id: NAME,

    label: ({ t }) => t('user:labels.name'),

    value: ({ first, last }) => `${first} ${last}`,
  },

  {
    id: EMAIL,

    label: ({ t }) => t('user:labels.email'),

    value: ({ email }) => email,
  },
] as Array<AccountPageItemModel>;
