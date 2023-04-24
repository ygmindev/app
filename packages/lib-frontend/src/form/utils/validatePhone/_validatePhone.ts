import type { _ValidatePhoneModel } from '@lib/frontend/form/utils/validatePhone/_validatePhone.models';
import type { CountryCode } from 'libphonenumber-js';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const _validatePhone: _ValidatePhoneModel = ({ data, value }) =>
  data?.countryCode && value && isValidPhoneNumber(value, data.countryCode as CountryCode)
    ? null
    : ({ t }) => t('core:messages.validatePhone');
