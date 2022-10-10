import type { FormValidatorModel } from '@lib/frontend/form/form.models';

export const validateLength: (length: number) => FormValidatorModel =
  (length) =>
  ({ value }) =>
    value && value.length === length
      ? undefined
      : ({ t }) => t('core:messages.validateLength', { value: length });
