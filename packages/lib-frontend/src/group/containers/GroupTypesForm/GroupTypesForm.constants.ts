import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';

export const GROUP_TYPES_OPTIONS: Array<TranslatableOptionModel> = [
  { id: 'issuer', label: ({ t }) => t('group:issuer') },
  { id: 'underwriter', label: ({ t }) => t('group:underwriter') },
];
