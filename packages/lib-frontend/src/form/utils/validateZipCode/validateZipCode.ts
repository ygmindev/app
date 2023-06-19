import type { FormValidatorModel } from '#lib-frontend/form/form.models';

export const validateZipCode: () => FormValidatorModel =
  () =>
  ({ value }) =>
    /^\d{5}(?:[-\s]\d{4})?$/.test(value) ? null : ({ t }) => t('core:validateZipCode');
