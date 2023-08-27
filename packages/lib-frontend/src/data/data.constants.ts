import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';

export const DATA = 'data';

export enum NUMBER_UNIT_RATE {
  BASIS_POINT = 'basisPoint',
  PERCENT = 'percent',
}

export enum NUMBER_UNIT_AMOUNT {
  BILLION = 'billion',
  MILLION = 'million',
  THOUSAND = 'thousand',
}

export const NUMBER_UNIT_AMOUNT_OPTIONS: Array<TranslatableOptionModel> = [
  { id: NUMBER_UNIT_AMOUNT.THOUSAND, label: ({ t }) => t('core:thousand') },
  { id: NUMBER_UNIT_AMOUNT.MILLION, label: ({ t }) => t('core:million') },
  { id: NUMBER_UNIT_AMOUNT.BILLION, label: ({ t }) => t('core:billion') },
];
