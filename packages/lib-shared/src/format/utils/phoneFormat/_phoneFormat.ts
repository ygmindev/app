import type {
  _PhoneFormatModel,
  _PhoneFormatParamsModel,
} from '@lib/shared/format/utils/phoneFormat/_phoneFormat.models';
import { parsePhoneNumber } from 'libphonenumber-js';

export const _phoneFormat = (value: _PhoneFormatParamsModel): _PhoneFormatModel =>
  parsePhoneNumber(value)?.formatInternational() || '';
