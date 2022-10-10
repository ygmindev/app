import type { FormValidatorModel } from '@lib/frontend/form/form.models';

export const validateNotEmpty: () => FormValidatorModel =
  () =>
  ({ value }) =>
    value ? undefined : ({ t }) => t('core:messages.validateNotEmpty');
