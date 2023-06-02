import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import type {
  _ParsePhoneNumberModel,
  _ParsePhoneNumberParamsModel,
} from '@lib/shared/locale/utils/parsePhoneNumber/_parsePhoneNumber.models';
import { ParseError, parsePhoneNumberFromString } from 'libphonenumber-js';
import trim from 'lodash/trim';

export const _parsePhoneNumber = (params: _ParsePhoneNumberParamsModel): _ParsePhoneNumberModel => {
  try {
    const result = parsePhoneNumberFromString(`+${trim(params, '+')}`);
    if (result) {
      const { countryCallingCode, ext, nationalNumber } = result ?? {};
      return { callingCode: countryCallingCode, extension: ext, phone: nationalNumber };
    }
    throw new ParseError();
  } catch (e) {
    if (e instanceof ParseError) {
      throw new InvalidArgumentError(e.message);
    } else {
      throw e;
    }
  }
};
