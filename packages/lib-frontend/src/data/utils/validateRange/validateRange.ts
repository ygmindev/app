import toNumber from 'lodash/toNumber';

import { type FormValidatorModel } from '#lib-frontend/data/data.models';

export const validateRange =
  (min?: number, max?: number): FormValidatorModel<number> =>
  ({ value }) =>
    !!min && toNumber(value) >= min && !!max && toNumber(value) <= max
      ? null
      : ({ t }) => t('core:validateRange');
