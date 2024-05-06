import { type FormValidatorModel } from '@lib/frontend/data/data.models';

// TODO: changemodels?
export const validateAlphaNumeric: () => FormValidatorModel =
  () =>
  ({ value }) =>
    value && /[0-9~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(value)
      ? ({ t }) => t('core:validateAlphaNumeric')
      : null;
