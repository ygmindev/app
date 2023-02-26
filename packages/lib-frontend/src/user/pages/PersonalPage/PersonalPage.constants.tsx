import type { PersonalPageItemModel } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.models';
import { EMAIL, NAME } from '@lib/frontend/user/user.constants';

export const PERSONAL_PAGE_FIELDS: Array<PersonalPageItemModel> = [
  {
    icon: 'id',

    id: NAME,

    label: ({ t }) => t('user:labels.name'),

    value: ({ first, last }) => `${first} ${last}`,
  },

  {
    icon: 'email',

    id: EMAIL,

    label: ({ t }) => t('user:labels.email'),

    value: ({ email }) => email,
  },
] as Array<PersonalPageItemModel>;
