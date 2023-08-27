import { type FormValidatorModel } from '#lib-frontend/data/data.models';

export const validateNotEmpty: FormValidatorModel = ({ value }) =>
  value ? null : ({ t }) => t('core:validateNotEmpty');
