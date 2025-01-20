import {
  type _PhoneFormatModel,
  type _PhoneFormatParamsModel,
} from '@lib/shared/locale/utils/phoneFormat/_phoneFormat.models';
import { parsePhoneNumberWithError } from 'libphonenumber-js';

export const _phoneFormat = (params: _PhoneFormatParamsModel): _PhoneFormatModel =>
  parsePhoneNumberWithError(params)?.formatInternational() || '';
