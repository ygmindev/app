import type {
  _PhoneFormatModel,
  _PhoneFormatParamsModel,
} from '@lib/shared/format/utils/phoneFormat/_phoneFormat.models';
import { parsePhoneNumber } from 'libphonenumber-js';

export const _phoneFormat = (params: _PhoneFormatParamsModel): _PhoneFormatModel =>
  parsePhoneNumber(params)?.formatInternational() || '';
