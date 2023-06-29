import { type FormValidatorModel } from '#lib-frontend/form/form.models';

export const validateLength: (length: number) => FormValidatorModel =
  (length) =>
  ({ value }) =>
    value && value.length === length
      ? null
      : ({ t }) => t('core:validateLength', { value: length });
