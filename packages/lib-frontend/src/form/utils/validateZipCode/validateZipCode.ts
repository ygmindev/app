import type { FormValidatorModel } from '@lib/frontend/form/form.models';

export const validateZipCode: () => FormValidatorModel =
  () =>
  ({ value }) =>
    /^\d{5}(?:[-\s]\d{4})?$/.test(value)
      ? undefined
      : ({ t }) => t('core:messages.validateZipCode');