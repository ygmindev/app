import { type _PhoneNumberModel } from '@lib/shared/locale/utils/phoneNumber/_phoneNumber.models';
import { isValidPhoneNumber, parsePhoneNumberFromString } from 'libphonenumber-js';
import isString from 'lodash/isString';

export const _phoneNumber: _PhoneNumberModel = {
  format: (value) =>
    parsePhoneNumberFromString(
      isString(value)
        ? value
        : `${value.callingCode ? `+${value.callingCode}` : ''}${value.phone}${value.extension ? `,extension${value.extension}` : ''}`,
    )?.formatInternational() ?? '',

  isValid: (value, callingCode) => isValidPhoneNumber(value, { defaultCallingCode: callingCode }),

  parse: (value) => {
    const parsed = parsePhoneNumberFromString(value);
    return {
      callingCode: parsed?.countryCallingCode,
      extension: parsed?.ext,
      phone: parsed?.nationalNumber ?? '',
    };
  },
};
