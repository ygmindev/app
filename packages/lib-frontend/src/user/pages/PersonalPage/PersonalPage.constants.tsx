import type { PersonalPageItemModel } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.models';
import { EMAIL, NAME, PHONE } from '@lib/frontend/user/user.constants';
import { phoneFormat } from '@lib/shared/format/utils/phoneFormat/phoneFormat';

export const PERSONAL_FIELDS: Array<PersonalPageItemModel> = [
  {
    icon: 'id',

    id: NAME,

    label: ({ t }) => t('user:labels.name'),

    value: ({ first, last }) => (first || last ? `${first || ''} ${last || ''}` : undefined),
  },

  {
    icon: 'phone',

    id: PHONE,

    label: ({ t }) => t('core:labels.phone'),

    value: ({ phone }) => (phone ? phoneFormat(phone) : undefined),
  },

  {
    icon: 'email',

    id: EMAIL,

    label: ({ t }) => t('user:labels.email'),

    value: ({ email }) => email,
  },
] as Array<PersonalPageItemModel>;
