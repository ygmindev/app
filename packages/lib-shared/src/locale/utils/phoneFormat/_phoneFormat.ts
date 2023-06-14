import { parsePhoneNumber } from 'libphonenumber-js';

import type {
  _PhoneFormatModel,
  _PhoneFormatParamsModel,
} from '#lib-shared/locale/utils/phoneFormat/_phoneFormat.models';

export const _phoneFormat = (params: _PhoneFormatParamsModel): _PhoneFormatModel =>
  parsePhoneNumber(params)?.formatInternational() || '';
