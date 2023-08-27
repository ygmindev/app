import toNumber from 'lodash/toNumber';

import { type FormValidatorModel } from '#lib-frontend/data/data.models';

export const validateRange: (min: number, max: number) => FormValidatorModel =
  (min, max) =>
  ({ value }) =>
    toNumber(value) >= min && toNumber(value) <= max ? null : ({ t }) => t('core:validateRange');
