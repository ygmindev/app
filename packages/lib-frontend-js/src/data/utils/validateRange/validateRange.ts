import { type FormValidatorModel } from '@lib/frontend/data/data.models';

export const validateRange =
  (min?: number, max?: number): FormValidatorModel<number> =>
  ({ value }) =>
    !!value && !!min && value < min && !!max && value > max
      ? ({ t }) => t('core:validateRange')
      : null;
