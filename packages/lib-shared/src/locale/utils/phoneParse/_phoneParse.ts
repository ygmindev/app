import {
  type _PhoneParseModel,
  type _PhoneParseParamsModel,
} from '@lib/shared/locale/utils/phoneParse/_phoneParse.models';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import trim from 'lodash/trim';

export const _phoneParse = (params: _PhoneParseParamsModel): _PhoneParseModel => {
  try {
    const result = parsePhoneNumberFromString(`+${trim(params, '+')}`);
    if (result) {
      const { countryCallingCode, ext, nationalNumber } = result ?? {};
      return { callingCode: countryCallingCode, extension: ext, phone: nationalNumber };
    }
    return null;
  } catch (e) {
    return null;
  }
};
