import type { FormValidatorModel } from '@lib/frontend/form/form.models';

export const validateAlphaNumeric: () => FormValidatorModel =
  () =>
  ({ value }) =>
    /[0-9~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(value) // eslint-disable-line no-useless-escape
      ? ({ t }) => t('core:messages.validateAlphaNumeric')
      : undefined;
