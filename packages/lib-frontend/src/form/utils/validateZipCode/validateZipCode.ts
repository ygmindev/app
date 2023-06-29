import { type FormValidatorModel } from '#lib-frontend/form/form.models';

export const validateZipCode: () => FormValidatorModel =
  () =>
  ({ value }) =>
    value && /^\d{5}(?:[-\s]\d{4})?$/.test(value) ? null : ({ t }) => t('core:validateZipCode');
