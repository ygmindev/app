import type { FormValidatorModel } from '@lib/frontend/form/form.models';
import { toNumber } from 'lodash';

export const validateRange: (min: number, max: number) => FormValidatorModel =
  (min, max) =>
  ({ value }) =>
    toNumber(value) >= min && toNumber(value) <= max
      ? undefined
      : ({ t }) => t('core:messages.validateRange');
