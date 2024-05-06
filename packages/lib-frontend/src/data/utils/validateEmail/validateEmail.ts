import { type FormValidatorModel } from '@lib/frontend/data/data.models';

export const validateEmail: FormValidatorModel = ({ value }) =>
  value && /\S+@\S+\.\S+/.test(value.toLowerCase()) ? null : ({ t }) => t('core:validateEmail');
