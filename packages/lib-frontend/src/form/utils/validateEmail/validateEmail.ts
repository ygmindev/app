import type { FormValidatorModel } from '@lib/frontend/form/form.models';

export const validateEmail: () => FormValidatorModel =
  () =>
  ({ value }) =>
    value && /\S+@\S+\.\S+/.test(value.toLowerCase())
      ? undefined
      : ({ t }) => t('core:messages.validateEmail');
