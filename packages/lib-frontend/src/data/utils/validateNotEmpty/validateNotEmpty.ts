import { type FormValidatorModel } from '#lib-frontend/data/data.models';

export const validateNotEmpty: FormValidatorModel<string | Array<string> | undefined> = ({
  value,
}) => (value ? null : ({ t }) => t('core:validateNotEmpty'));
